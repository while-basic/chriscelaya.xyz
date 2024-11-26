import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './PluginShowcase.scss';

const PluginCard = ({ plugin }) => (
  <motion.div
    className="plugin-card"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="plugin-header">
      <h3>{plugin.name}</h3>
      <span className={`status-badge ${plugin.status.toLowerCase()}`}>
        {plugin.status}
      </span>
    </div>

    <div className="plugin-image">
      <img src={plugin.image} alt={`${plugin.name} interface`} />
    </div>

    <div className="plugin-content">
      <p className="description">{plugin.description}</p>
      <div className="features">
        <h4>Key Features</h4>
        <ul>
          {plugin.features.map((feature) => (
            <li key={`${plugin.id}-${feature}`}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="tech-info">
        <span className="tech-stack">
          <strong>Technology:</strong> {plugin.technology}
        </span>
      </div>

      {plugin.demoVideo && (
        <a
          href={plugin.demoVideo}
          className="demo-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Demo
        </a>
      )}
    </div>
  </motion.div>
);

const PluginShowcase = ({ plugins }) => (
  <div className="plugins-grid">
    {plugins.map((plugin) => (
      <PluginCard key={plugin.id} plugin={plugin} />
    ))}
  </div>
);

PluginCard.propTypes = {
  plugin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    demoVideo: PropTypes.string,
    status: PropTypes.string.isRequired,
    technology: PropTypes.string.isRequired,
  }).isRequired,
};

PluginShowcase.propTypes = {
  plugins: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    demoVideo: PropTypes.string,
    status: PropTypes.string.isRequired,
    technology: PropTypes.string.isRequired,
  })).isRequired,
};

export default PluginShowcase;
