import React from 'react';
import Main from '../components/Main/Main';
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import Contact from '../components/Contact/Contact';

function HomePage() {
  return (
    <>
      <Header/>
      <Hero/>
      <Main/>
      <Contact/>
      {/*       <button onClick={changeWebVariantOld}>Zpět na starý web</button>
 */}    </>
  );
}

export default HomePage;
