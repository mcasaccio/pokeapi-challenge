import React from 'react';
import { useTranslation } from 'react-i18next'

import spain from '../assets/spain.svg'
import unitedStates from '../assets/unitedStates.svg'

export const ChangeLanguage = () => {
    const { i18n } = useTranslation()

    const handleChangeLanguage = () => {
        if (i18n.language === 'es') {
            i18n.changeLanguage('en')
        } else {
            i18n.changeLanguage('es')
        }
    }

    return (
        <div className="btn-group" role="group" aria-label="Basic example">

            <button
                type="button"
                className="btn btn-secondary"
                onClick={handleChangeLanguage}
                disabled={i18n.language === 'es' && true}
            ><img src={spain} alt="es" style={{ width: '20px' }} />
            </button>

            <button
                type="button"
                className="btn btn-secondary"
                onClick={handleChangeLanguage}
                disabled={i18n.language === 'en' && true}
            ><img src={unitedStates} alt="en" style={{ width: '20px' }} />
            </button>

        </div>
    )
}