import React from 'react';
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import { motion } from 'framer-motion';
import { Header } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import chairsProjector from '../../images/graphics/Projector.png';
import left from '../../images/icons/left.png';
import right from '../../images/icons/right.png';
import ReferenceItem from './ReferenceItem/ReferenceItem';
import cv from '../../images/references/CV.png';
import letokruh from '../../images/references/Letokruh.png';
import dkck from '../../images/references/DKCK.png';
import screen from '../../images/graphics/Platno.png';
import '@brainhubeu/react-carousel/lib/style.css';
import './references.scss';

const referencesVariants = {
  hidden: { x: '-100vw' },
  animate: {
    x: 0,
    transition: { duration: 0.5, type: 'tween' },
  },
};

const rocketVariants = {
  initial: { y: 0 },
  animate: {
    y: '60%',
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 2.5,
      ease: [0.33, 0.43, 0.53, 0.83],
    },
  },
};

function References() {
  return (
    <motion.div
      variants={referencesVariants}
      initial="hidden"
      animate="animate"
      exit="hidden"
      className="references_section"
    >
      <Header />
      <Navbar />
      <h1>Reference</h1>
      <div className="graphics_rocket"></div>
      <div className="graphics">
        <div
          className="projectorScreen"
          style={{ backgroundImage: `url(${screen})` }}
        >
          <Carousel
            className="refCarousel"
            plugins={[
              'infinite',
              'centered',
              {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: (
                    <button
                      style={{
                        border: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                      }}
                    >
                      <img
                        style={{
                          marginLeft: '0',
                          width: '24px',
                          height: '24px',
                        }}
                        src={left}
                        alt="šipka doleva"
                      />
                    </button>
                  ),
                  arrowLeftDisabled: (
                    <button
                      style={{
                        border: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                      }}
                    >
                      <img
                        style={{
                          marginLeft: '0',
                          width: '24px',
                          height: '24px',
                        }}
                        src={left}
                        alt="šedá šipka doleva"
                      />{' '}
                    </button>
                  ),
                  arrowRight: (
                    <button
                      style={{
                        border: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                      }}
                    >
                      <img
                        style={{
                          marginRight: '0',
                          width: '24px',
                          height: '24px',
                        }}
                        src={right}
                        alt="šipka doprava"
                      />{' '}
                    </button>
                  ),
                  arrowRightDisabled: (
                    <button
                      style={{
                        border: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                      }}
                    >
                      <img
                        style={{
                          marginRight: '0',
                          width: '24px',
                          height: '24px',
                        }}
                        src={right}
                        alt="šedá šipka doprava"
                      />{' '}
                    </button>
                  ),
                  addArrowClickHandler: true,
                },
              },
            ]}
          >
            <ReferenceItem
              refName="Letokruh"
              refDetails="Realizace webu podle UX designu - React šablona pro Wordpress."
              refImg={letokruh}
            />

            <ReferenceItem
              refName="Dámský klub Český Krumlov"
              refDetails="Vytvoření kompletního webu na míru."
              refImg={dkck}
            />
            <ReferenceItem
              refName="SKP Hvězda Jirkov"
              refDetails="Vytvoření kompletního webu na míru a vlastní grafika."
            />
            <ReferenceItem
              refName="ConsultVision"
              refDetails="Vytvoření kompletního webu na míru."
              refImg={cv}
            />
          </Carousel>
        </div>
        <div
          className="references_chairs"
          style={{ backgroundImage: `url(${chairsProjector})` }}
        ></div>
      </div>
    </motion.div>
  );
}

export default References;
