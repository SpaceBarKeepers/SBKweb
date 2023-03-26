import React from 'react';
import {useWebVariantContext} from "../contexts/webVariantContext";

function ContactPage() {
  const { changeWebVariantOld } = useWebVariantContext();
  return (
    <div>
      LandingPage nového webu
      <button onClick={changeWebVariantOld}>Zpět na starý web</button>
    </div>
  );
}

export default ContactPage;
