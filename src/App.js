import React, {useEffect, useState} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import {LandingPage} from './oldVersion/pages/LandingPage/LandingPage';
import WhatWeDo from './oldVersion/pages/WhatWeDo/WhatWeDo';
import References from './oldVersion/pages/References/References';
import AboutUs from './oldVersion/pages/AboutUs/AboutUs';
import ContactPage from './oldVersion/pages/ContactPage/ContactPage';
import InitialDesktop from './oldVersion/pages/InitialDesktop/InitialDesktop';
import {BrowserRouter} from 'react-router-dom';
import {Contacts} from './oldVersion/components/Contacts/Contacts';
import {CookiesPolicy} from './oldVersion/pages/CookiesPolicy/CookiesPolicy';
import {useWebVariantContext} from "./contexts/webVariantContext";
import Homepage from "./pages/Homepage";
import ProjectManagementPage from "./pages/ProjectManagementPage/ProjectManagementPage";

function App() {
    const [wideScreen, setWideScreen] = useState(false);
    const [isSafari, setIsSafari] = useState(false);
    const {oldVariant} = useWebVariantContext();
    const ScrollToTop = () => {
        const {pathname} = useLocation();

        useEffect(() => {
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
                setIsSafari(true);
        }, []);

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    };

    useEffect(() => {
        if (window.innerWidth >= 1100) {
            setWideScreen(true);
        }
        window.addEventListener('resize', handleResize);
    }, []);

    const handleResize = () => {
        if (window.innerWidth >= 1100) {
            setWideScreen(true);
        } else {
            setWideScreen(false);
        }
    };

    return (
        <AnimatePresence mode={"wait"}>
            <BrowserRouter>
                <ScrollToTop/>
                {oldVariant ? (<Routes>
                        <Route path="/onas" element={<AboutUs/>}/>
                        <Route path="/codelame" element={<WhatWeDo/>}/>
                        <Route path="/reference" element={<References/>}/>
                        <Route path="/kontakty/info" element={<Contacts/>}/>
                        <Route path="/kontakty" element={<ContactPage/>}/>
                        <Route path="/home" element={<InitialDesktop/>}/>
                        <Route path="/cookies-policy" element={<CookiesPolicy/>}/>
                        <Route path="/project-management/:id" element={<ProjectManagementPage/>}/>
                        <Route path="/*" element={wideScreen && !isSafari ? <InitialDesktop/> : <LandingPage/>}/>
                    </Routes>)
                    : (<Routes>
                        <Route path="/project-management/:id" element={<ProjectManagementPage/>}/>
                        <Route path="/*" element={<Homepage/>}/>
                    </Routes>)
                }
            </BrowserRouter>
        </AnimatePresence>
    );
}

export default App;
