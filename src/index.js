import React from 'react';
import {createRoot} from "react-dom/client";
import App from './App';
import './index.scss';
import {WebVariantProvider} from "./contexts/webVariantContext";
import {LanguageProvider} from "./contexts/LanguageContext";

const container = document.getElementById('root');
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <WebVariantProvider>
      <LanguageProvider>
        <App/>
      </LanguageProvider>
    </WebVariantProvider>
  </React.StrictMode>
);
