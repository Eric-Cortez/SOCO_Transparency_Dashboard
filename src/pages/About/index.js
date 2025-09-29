import React from "react";
import { motion } from "framer-motion";
import image from "../../images/banner.png";
import "./About.css";

export default function About() {
  return (
    <div className="page-content">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-hero">
          <motion.img
            src={image}
            alt="Data analysis and transparency"
            className="about-hero-image"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <div className="about-hero-content">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              About This Project
            </motion.h1>
            <motion.p
              className="about-hero-subtitle"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Making government data accessible and transparent through modern visualization
            </motion.p>
          </div>
        </div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="about-section">
            <h2>Project Overview</h2>
            <p>
              The SOCO Transparency Dashboard is a modern data visualization project that provides
              the community with interactive insights into Sonoma County Sheriff's Office arrest data.
              Built with React and modern web technologies, it transforms complex government data
              into accessible, understandable visualizations.
            </p>
          </div>

          <div className="about-section">
            <h2>Data Source & Features</h2>
            <p>
              This project utilizes the public{" "}
              <a
                href="https://data.sonomacounty.ca.gov/Public-Safety/Sonoma-County-Sheriff-s-Office-Arrest-Data/f6uf-eqmk"
                target="_blank"
                rel="noreferrer"
                className="data-link"
              >
                SOCO Data API
              </a>{" "}
              to generate real-time charts and insights including:
            </p>
            <ul className="feature-list">
              <li>📊 Interactive pie charts showing arrest distribution by agency</li>
              <li>📈 Bar charts displaying top arrest categories</li>
              <li>🗺️ Geographic distribution of arrest locations</li>
              <li>👥 Demographic breakdowns and statistics</li>
              <li>📱 Responsive design for all device types</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Technology Stack</h2>
            <div className="tech-stack">
              <div className="tech-item">
                <span className="tech-name">React 18</span>
                <span className="tech-desc">Modern UI framework</span>
              </div>
              <div className="tech-item">
                <span className="tech-name">Plotly.js</span>
                <span className="tech-desc">Interactive charts</span>
              </div>
              <div className="tech-item">
                <span className="tech-name">Framer Motion</span>
                <span className="tech-desc">Smooth animations</span>
              </div>
              <div className="tech-item">
                <span className="tech-name">Modern CSS</span>
                <span className="tech-desc">Custom properties & Grid</span>
              </div>
            </div>
          </div>

          <div className="about-section disclaimer-section">
            <h2>⚠️ Important Disclaimer</h2>
            <div className="disclaimer-content">
              <p>
                <strong>Independent Project:</strong> This dashboard is an independent project created by Eric Cortez
                and is <strong>NOT</strong> built, maintained, or endorsed by Sonoma County or any of its agencies.
                This is a personal project that utilizes publicly available data from the Sonoma County Open Data portal.
              </p>
              <p>
                <strong>Data Accuracy:</strong> While we strive to display the data accurately, the creator of this
                dashboard is not liable for the accuracy, completeness, or reliability of the data presented.
                All data is consumed directly from the public API without modification and displayed in an
                easy-to-understand format for community benefit.
              </p>
              <p>
                <strong>Data Source:</strong> All arrest data is sourced directly from the official Sonoma County
                Open Data API. For the most current and authoritative data, please visit the official
                <a
                  href="https://data.sonomacounty.ca.gov/"
                  target="_blank"
                  rel="noreferrer"
                  className="data-link"
                >
                  {" "}Sonoma County Data Portal
                </a>.
              </p>
              <p>
                <strong>No Warranty:</strong> This dashboard is provided "as is" without any warranties, express or
                implied. The creator assumes no responsibility for decisions made based on the information presented
                in this dashboard.
              </p>
            </div>
          </div>

          <div className="about-section">
            <h2>Open Source</h2>
            <p>
              This project is open source under the MIT License. View the source code,
              contribute, or fork the project on{" "}
              <a
                href="https://github.com/Eric-Cortez/SOCO_Transparency_Dashboard"
                target="_blank"
                rel="noreferrer"
                className="github-link"
              >
                GitHub
              </a>.
            </p>
          </div>

          <div className="about-footer">
            <p>
              Created by{" "}
              <a
                href="https://github.com/Eric-Cortez"
                target="_blank"
                rel="noreferrer"
                className="author-link"
              >
                Eric Cortez
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
