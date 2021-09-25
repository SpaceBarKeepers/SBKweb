import React from 'react';
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import { motion } from 'framer-motion';
import { Header } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import chairsProjector from '../../images/graphics/Projector.png';
import left from '../../images/icons/left.png';
import right from '../../images/icons/right.png';
import ReferenceItem from './ReferenceItem/ReferenceItem';
import cv from '../../images/references/CV.webp';
import letokruh from '../../images/references/Letokruh.webp';
import skp from '../../images/references/skpjirkov.png';
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

function References() {
  return (
    <>
      <Navbar />
      <motion.div
        variants={referencesVariants}
        initial="hidden"
        animate="animate"
        exit="hidden"
        className="references_section"
      >
        <Header />
        <h1>Reference</h1>
        <div className="graphics_rocket" />
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
                refHref="http://letokruh.eu"
              />

              <ReferenceItem
                refName="Dámský klub Český Krumlov"
                refDetails="Vytvoření kompletního webu na míru."
                refImg={dkck}
                refHref="http://damskyklubck.cz"
              />
              <ReferenceItem
                refName="SKP Hvězda Jirkov"
                refDetails="Vytvoření kompletního webu na míru a vlastní grafika."
                refImg={skp}
                refHref="http://jkakaratejirkov.cz"
              />
              <ReferenceItem
                refName="ConsultVision"
                refDetails="Vytvoření kompletního webu na míru."
                refImg={cv}
                refHref="http://consultvision.cz"
              />
            </Carousel>
          </div>
          <div
            className="references_chairs"
            style={{ backgroundImage: `url(${chairsProjector})` }}
          />
        </div>
      </motion.div>
    </>
  );
}

export default References;
