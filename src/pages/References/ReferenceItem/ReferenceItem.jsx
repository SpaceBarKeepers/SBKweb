import React from 'react';
import { motion } from 'framer-motion';
import './referenceItem.scss';

function ReferenceItem(props) {
  return (
    <div
      className="referenceItem"
      style={{ backgroundImage: `url(${props.refImg})` }}
    >
      <motion.div
        className="referenceContent"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          backgroundColor: 'rgba(250, 248, 221, 0.92)',
          transition: { duration: 1.1, delay: 1 },
        }}
      >
        <h3>{props.refName}</h3>
        <p>{props.refDetails}</p>
      </motion.div>
    </div>
  );
}

export default ReferenceItem;
