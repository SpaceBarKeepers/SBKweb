import React from 'react';
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import { motion } from 'framer-motion';
import { Header } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import chairsProjector from '../../images/graphics/Projector.png';
import left from '../../images/icons/left.png';
import right from '../../images/icons/right.png';
import ReferenceItem from './ReferenceItem/ReferenceItem';
import screen from '../../images/graphics/Platno.png';
import light from '../../images/graphics/Light.png';
import '@brainhubeu/react-carousel/lib/style.css';
import './references.scss';

const referencesVariants = {
  hidden: { x: '-100vw' },
  visible: {
    x: 0,
    transition: { duration: 0.5, type: 'tween' },
  },
};

function References() {
  return (
    <motion.div
      variants={referencesVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="references_section"
    >
      <Header /> <Navbar />
      <h1>Reference</h1>
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
                          marginLeft: '16px',
                          width: '32px',
                          height: '32px',
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
                          marginLeft: '16px',
                          width: '32px',
                          height: '32px',
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
                          marginRight: '16px',
                          width: '32px',
                          height: '32px',
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
                          marginRight: '16px',
                          width: '32px',
                          height: '32px',
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
            <ReferenceItem refName="Letokruh" refDetails="detaily" />
            <ReferenceItem refName="ConsultVision" refDetails="detaily" />
            <ReferenceItem
              refName="Dámský klub Český Krumlov"
              refDetails="detaily"
            />
          </Carousel>
        </div>
       {/*  <div>
          <img className="projectorLight" src={light} alt="" />
        </div> */}
        <div
          className="references_chairs"
          style={{ backgroundImage: `url(${chairsProjector})` }}
        ></div>
      </div>
    </motion.div>
  );
}

export default References;
