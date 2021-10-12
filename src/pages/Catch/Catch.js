import React from 'react'
import { useTranslation } from "react-i18next";

import Header from '../../components/Header/Header';
import './style.css';

const Catch = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Header />
            <span className="sorry">{t('sorry')}</span>
        </div>
    )
}

export default Catch
