import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
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

  // const referenceItemVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     backgroundColor: 'rgba(236, 212, 68, 0.3)',
  //     transition: { duration: 1.1, delay: 1.5 },
  //   },
  // };

  return (
    <a
      href={props.refHref}
      target="_blank"
      rel="noreferrer"
      className="referenceItemHref"
    >
      <div
        className="referenceItem"
        style={{ backgroundImage: `url(${props.refImg})` }}
      >
        <div ref={ref} className="referenceContent"></div>
      </div>
    </a>
  );
}

export default ReferenceItem;
