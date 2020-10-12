import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { loadPokemons } from '../actions/pokemon'

export const Pagination = () => {
    const { next, previous } = useSelector(state => state.Pokemon.pokemons)
    const dispatch = useDispatch();
    const { t } = useTranslation()

    const handlePage = (nextPage, previousPage) => {
        if (nextPage) { dispatch(loadPokemons(nextPage)) }
        if (previousPage) { dispatch(loadPokemons(previousPage)) }
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
    }

    return (
        <div className="btn-group" role="group" aria-label="Basic example">

            <button
                type="button"
                className="btn btn-secondary"
                onClick={(e) => handlePage(previous)}
                disabled={!previous}
            >{t('previous')}
            </button>

            <button
                type="button"
                className="btn btn-secondary"
                onClick={(e) => handlePage(next)}
            >{t('next')}
            </button>

        </div>
    )
}