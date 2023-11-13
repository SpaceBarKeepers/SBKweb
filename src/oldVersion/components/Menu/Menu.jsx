import React from 'react';
import menuSign from '../../images/graphics/menuSign.png';
import menuGraphics from '../../images/graphics/menuGraphics.png';
import textJSON from '../../../texts.json';
import './menu.scss';
import Order from '../Order/Order';

export const Menu = () => {
  return (
    <section className="menu">
      <header className="menu_header">
        <div className="menu_title">
          <img src={menuSign} alt="" />
        </div>
        <div className="menu_mainText">{textJSON.whatWeDo.mainText}</div>
      </header>
      <main className="menu_main1">
        <div className="menu_main">
          <div className="menu_mainIngredients">
            <h3>Hlavní ingredience</h3>
            <div>
              <h4>Design na míru</h4>
              <p>{textJSON.whatWeDo.mainIngredients.designNaMiru}</p>
            </div>
            <div>
              <h4>Responzivní web</h4>
              <p>{textJSON.whatWeDo.mainIngredients.responzivniWeb}</p>
            </div>
            <div>
              <h4>Optimalizace webu</h4>
              <p>{textJSON.whatWeDo.mainIngredients.optimalizaceWebu}</p>
            </div>
            <div>
              <h4>Admin prostředí na míru</h4>
              <p>{textJSON.whatWeDo.mainIngredients.adminProstrediNaMiru}</p>
            </div>
            <div>
              <h4>Uživatelská zkušenost</h4>
              <p>{textJSON.whatWeDo.mainIngredients.uzivatelskaZkusenost}</p>
            </div>
            <div>
              <h4>Individuální přístup</h4>
              <p>{textJSON.whatWeDo.mainIngredients.individualniPristup}</p>
            </div>
          </div>
          <div className="menu_somethingExtra">
            <h3>Něco navíc</h3>
            <div>
              <h4>Branding</h4>
              <p>{textJSON.whatWeDo.somethingExtra.branding}</p>
            </div>
            <div>
              <h4>Správa webu</h4>
              <p>{textJSON.whatWeDo.somethingExtra.spravaWebu}</p>
            </div>
            <div>
              <h4>Správa hostingových služeb</h4>
              <p>{textJSON.whatWeDo.somethingExtra.spravaHostingovychSluzeb}</p>
            </div>
            <div>
              <h4>Nastavení SEO</h4>
              <p>{textJSON.whatWeDo.somethingExtra.nastaveniSEO}</p>
            </div>
            <div>
              <h4>Obchodní zkušenosti</h4>
              <p>{textJSON.whatWeDo.somethingExtra.obchodniZkusenosti}</p>
            </div>
            <div>
              <h4>Analytické zkušenosti</h4>
              <p>{textJSON.whatWeDo.somethingExtra.analytickeZkusenosti}</p>
            </div>
          </div>{' '}
        </div>
        <div className="menu_somethingExtra_plus">
          <h4>+</h4>
          <p>{textJSON.whatWeDo.somethingExtra.plus}</p>
        </div>
        <Order />
      </main>
      <div className="menu_bottom">
        <img src={menuGraphics} alt="" />
      </div>
    </section>
  );
};
