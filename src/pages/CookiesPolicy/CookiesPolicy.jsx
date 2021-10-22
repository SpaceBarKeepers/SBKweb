import React from 'react';
import './cookiesPolicy.scss';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import NavbarMobile from '../../components/Navbar/NavbarMobile';

export const CookiesPolicy = () => {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <div className="cookiesPolicy">
        <h2 className="cookiesPolicy_Title">Podmínky použití</h2>
        <h3>Jaká data sbíráme</h3>
        <ol>
          <li>
            <h4>Co jsou soubory cookies</h4>
            <p>
              Soubory cookies jsou krátké textové soubory, které internetová
              stránka odešle do Vašeho prohlížeče. Umožňují internetové stránce
              zaznamenat informace o Vaší návštěvě, například zvolený jazyk a
              podobně. Následující návštěva stránek tak pro Vás může být snazší
              a příjemnější. Soubory cookies jsou důležité, neboť bez nich by
              procházení sítě Internet bylo mnohem složitější. Soubory cookies
              umožňují lepší využití naší internetové stránky a přizpůsobení
              jejího obsahu Vašim potřebám. Soubory cookies používá téměř každá
              internetová stránka na světě. Soubory cookies jsou užitečné,
              protože zvyšují uživatelskou přívětivost opakovaně navštívené
              internetové stránky.
            </p>
          </li>
          <li>
            {' '}
            <h4>Druhy souborů cookies</h4>
            <p>
              Relační (tedy dočasné) soubory cookies nám umožňují propojovat
              Vaše jednotlivé aktivity po dobu prohlížení těchto internetových
              stránek. V okamžiku otevření okna Vašeho prohlížeče se tyto
              soubory aktivují a deaktivují se po zavření okna Vašeho
              prohlížeče. Relační cookies jsou dočasné a po zavření prohlížeče
              se všechny tyto soubory vymažou. Trvalé soubory cookies nám
              pomáhají Váš počítač identifikovat, jestliže opětovně navštívíte
              naši internetovou stránku. Další výhodou trvalých cookies je to,
              že nám umožňují přizpůsobit naše internetové stránky Vašim
              potřebám.
            </p>
          </li>
          <li>
            {' '}
            <h4>Využívání souborů cookies</h4>
            <p>
              V souladu s ustanovením § 89 odst. 3 zák. č. 127/2005 Sb., o
              elektronických komunikacích, v účinném znění, si Vás tímto
              dovolujeme informovat, že naše internetové stránky využívají pro
              svoji činnost soubory cookies, tedy Vaše soubory cookies, včetně
              trvalých, zpracováváme. Tento souhlas je udělen na dobu 24 měsíců.
              Internetové prohlížeče obvykle obsahují správu souborů cookies. V
              rámci nastavení Vašeho prohlížeče tak pravděpodobně můžete
              jednotlivé soubory cookies ručně mazat, blokovat či zcela zakázat
              jejich používání. Pro více informací použijte nápovědu Vašeho
              internetového prohlížeče. Jsou-li cookies povoleny, lze toto
              nastavení internetového prohlížeče považovat za souhlas se
              zpracováním osobních údajů. Prohlížeč je nástrojem zprostředkování
              souhlasu.
            </p>
          </li>
          <li>
            <h4>Účel použití souborů cookies</h4>
            <p>
              K personalizaci obsahu a reklam, poskytování funkcí sociálních
              médií a analýze naší návštěvnosti využíváme soubory cookies.
              Informace o tom, jak náš web používáte, sdílíme se svými partnery
              působícími v oblasti sociálních médií, inzerce a analýz.
              Používáním internetových stránek vyjadřujete souhlas propojením
              následujících služeb: <br />
              4.1 Google
              <br />
              Soubory cookies využíváme, kromě účelu uvedeného v předchozím
              odstavci, pouze pro účely stanovené v obchodních podmínkách.
            </p>
          </li>
        </ol>
      </div>
      <Footer />
    </>
  );
};
