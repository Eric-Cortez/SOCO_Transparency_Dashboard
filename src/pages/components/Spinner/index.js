import React from "react";
import { motion } from "framer-motion";
import "./Spinner.css";

export default function Spinner() {
  return (
    <motion.div
      className="spinner-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="spinner-wrapper">
        <div className="modern-spinner"></div>
        <p className="loading-text">Loading dashboard data...</p>
      </div>
    </motion.div>
  );
}
