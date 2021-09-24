import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './referenceItem.scss';
import { useInView } from 'react-intersection-observer';

function ReferenceItem(props) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const referenceItemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      backgroundColor: 'rgba(227, 11, 93, 0.9)',
      transition: { duration: 1.1, delay: 0.5 },
    },
  };

  return (
    <div
      className="referenceItem"
      style={{ backgroundImage: `url(${props.refImg})` }}
    >
      <motion.div
        ref={ref}
        className="referenceContent"
        initial="hidden"
        animate={controls}
        variants={referenceItemVariants}
      >
        <h3>{props.refName}</h3>
        <p>{props.refDetails}</p>
      </motion.div>
    </div>
  );
}

export default ReferenceItem;
