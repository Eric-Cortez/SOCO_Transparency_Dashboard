import React, { Suspense, lazy, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./ArrestDash.css";
import Spinner from "../components/Spinner";

const ArrestDegreePie = lazy(() => import("../components/ArrestDegreePie"));
const ArrestCount = lazy(() => import("../components/ArrestCount"));
const ArrestGenderPie = lazy(() => import("../components/ArrestGenderPie"));
const ArrestLocation = lazy(() => import("../components/ArrestLocation"));
const ArrestsByAgency = lazy(() => import("../components/ArrestsByAgency"));
const TopChargeChart = lazy(() => import("../components/TopChargeChart"));

export default function ArrestDash() {
  const [arrestData, setArrestData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const socoEndpoint = "https://data.sonomacounty.ca.gov/resource/f6uf-eqmk.json";

  useEffect(() => {
    getDataWithFetch();
  }, []);

  const getDataWithFetch = async () => {
    try {
      setLoading(true);
      const response = await fetch(socoEndpoint);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const jsonData = await response.json();
      setArrestData(jsonData);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  if (error) {
    return (
      <div className="page-content">
        <div className="error-container">
          <h2>Oops! Something went wrong</h2>
          <p>Failed to load arrest data: {error}</p>
          <button onClick={getDataWithFetch} className="btn btn-primary">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="page-header"
      >
        <h1 className="page-title">Arrest Data Dashboard</h1>
        <p className="page-subtitle">
          Real-time insights into arrest statistics for Sonoma County
        </p>
      </motion.div>

      <Suspense fallback={<Spinner />}>
        {loading ? (
          <Spinner />
        ) : (
          <motion.div
            className="dashboard"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="dashboard-item">
              <ArrestCount arrestData={arrestData} />
            </motion.div>
            <motion.div variants={itemVariants} className="dashboard-item">
              <ArrestDegreePie arrestData={arrestData} />
            </motion.div>
            <motion.div variants={itemVariants} className="dashboard-item">
              <ArrestGenderPie arrestData={arrestData} />
            </motion.div>
            <motion.div variants={itemVariants} className="dashboard-item">
              <ArrestsByAgency arrestData={arrestData} />
            </motion.div>
            <motion.div variants={itemVariants} className="dashboard-item">
              <ArrestLocation arrestData={arrestData} />
            </motion.div>
            <motion.div variants={itemVariants} className="dashboard-item">
              <TopChargeChart arrestData={arrestData} />
            </motion.div>
          </motion.div>
        )}
      </Suspense>
    </div>
  );
}
