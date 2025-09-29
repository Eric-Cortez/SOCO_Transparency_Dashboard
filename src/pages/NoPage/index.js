import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function NoPage() {
  return (
    <div className="page-content">
      <motion.div
        className="error-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: 'center',
          padding: 'var(--space-16)',
          maxWidth: '500px',
          margin: '0 auto'
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          style={{ fontSize: '4rem', marginBottom: 'var(--space-6)' }}
        >
          🔍
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            fontSize: 'var(--font-size-4xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--gray-900)',
            marginBottom: 'var(--space-4)'
          }}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--gray-600)',
            marginBottom: 'var(--space-8)'
          }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <NavLink to="/" className="btn btn-primary">
            Return to Dashboard
          </NavLink>
        </motion.div>
      </motion.div>
    </div>
  );
}
