import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { List } from '../components/List'
import { Pagination } from '../components/Pagination';
import { ChangeLanguage } from '../components/ChangeLanguage';

export const AppRouter = () => {
    const { t } = useTranslation()

    return (
        <Router>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <Link to="/" className="navbar-brand">POKE</Link>
                <ChangeLanguage />
                <Pagination />
            </nav>
            <div className="container">
                <h1 className="text-center" style={{ marginTop: '80px'}}>{t('welcome')}</h1>
                <List />
            </div>
        </Router>
    )
}