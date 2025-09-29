import { motion } from "framer-motion";
import "./ArrestCount.css";

export default function ArrestCount({ arrestData }) {


  return (
    <div className="arrest-count-container">
      <h3>Total Arrests</h3>
      <div className="chart-content">
        <div className="count-display">
          <motion.span
            className="arrest-count-number"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            {arrestData.length}
          </motion.span>
          <div className="count-subtitle">
            Reported incidents
          </div>
        </div>
        <div className="count-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <polyline points="17,11 19,13 23,9"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}
