import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function LanguageSwitch({ onLanguageSwitch }) {
    const { userLang, userLangChange } = useLanguage();

    const otherLang = userLang === 'en' ? 'cs' : 'en';
    const handleLanguageChange = () => userLangChange(otherLang);

    const handleSwitchLanguage = () => {
        handleLanguageChange();
        onLanguageSwitch(otherLang);
    };

    return (
        <StyledLanguageSwitch
            className="languageSwitch"
            onClick={handleSwitchLanguage}
        >
            {otherLang.toUpperCase()}
        </StyledLanguageSwitch>
    );
}

export default LanguageSwitch;
