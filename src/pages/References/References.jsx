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
import Footer from '../../components/Footer/Footer';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import { Helmet } from 'react-helmet';

const referencesVariants = {
  hidden: { x: '-100vw' },
  animate: {
    x: 0,
    transition: { duration: 0.5, type: 'tween' },
    when: 'beforeChildren',
    staggerChildren: 0.4,
    staggerDirection: -1,
  },
};

const clickMeVariants = {
  start: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      repeat: 6,
      duration: 0.8,
      ease: 'easeInOut',
      stiffness: 50,
    },
  },
};

function References() {
  return (
    <>
      {' '}
      <Helmet>
        <title>SpaceBarKeepers - reference</title>
      </Helmet>
      <Navbar />
      <NavbarMobile />
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
                      <motion.button
                        variants={clickMeVariants}
                        initial="start"
                        animate="animate"
                        style={{
                          border: 'none',
                          backgroundColor: 'transparent',
                          cursor: 'pointer',
                        }}
                      >
                        <img
                          className="arrowIcon"
                          src={left}
                          alt="??ipka doleva"
                        />
                      </motion.button>
                    ),
                    arrowLeftDisabled: (
                      <motion.button
                        variants={clickMeVariants}
                        initial="start"
                        animate="animate"
                        style={{
                          border: 'none',
                          backgroundColor: 'transparent',
                          cursor: 'pointer',
                        }}
                      >
                        <img
                          className="arrowIcon"
                          src={left}
                          alt="??ed?? ??ipka doleva"
                        />{' '}
                      </motion.button>
                    ),
                    arrowRight: (
                      <motion.button
                        variants={clickMeVariants}
                        initial="start"
                        animate="animate"
                        style={{
                          border: 'none',
                          backgroundColor: 'transparent',
                          cursor: 'pointer',
                        }}
                      >
                        <img
                          className="arrowIcon"
                          src={right}
                          alt="??ipka doprava"
                        />{' '}
                      </motion.button>
                    ),
                    arrowRightDisabled: (
                      <motion.button
                        variants={clickMeVariants}
                        initial="start"
                        animate="animate"
                        style={{
                          border: 'none',
                          backgroundColor: 'transparent',
                          cursor: 'pointer',
                        }}
                      >
                        <img
                          className="arrowIcon"
                          src={right}
                          alt="??ed?? ??ipka doprava"
                        />{' '}
                      </motion.button>
                    ),
                    addArrowClickHandler: true,
                  },
                },
              ]}
            >
              <ReferenceItem
                refName="Letokruh"
                refDetails="Realizace webu podle UX designu - React ??ablona pro Wordpress."
                refImg={letokruh}
                refHref="http://letokruh.eu"
              />

              <ReferenceItem
                refName="D??msk?? klub ??esk?? Krumlov"
                refDetails="Vytvo??en?? kompletn??ho webu na m??ru."
                refImg={dkck}
                refHref="https://damskyklubck.cz"
              />
              <ReferenceItem
                refName="SKP Hv??zda Jirkov"
                refDetails="Vytvo??en?? kompletn??ho webu na m??ru a vlastn?? grafika."
                refImg={skp}
                refHref="https://jkakaratejirkov.cz"
              />
              <ReferenceItem
                refName="ConsultVision"
                refDetails="Vytvo??en?? kompletn??ho webu na m??ru."
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
      <Footer />
    </>
  );
}

export default References;
