import React from 'react';
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { detailPokemon } from '../actions/pokemon'

export const PokemonCard = ({ name, image, id }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch();

    return (
        <div className="card m-4 animate__animated animate__fadeIn" style={{ width: '20rem' }}>
            <img src={image} className="card-img-top" alt={name} style={{ width: '10rem', margin: 'auto' }} />
            <div className="card-body d-flex flex-wrap justify-content-around">
                <h5 className="card-title text-capitalize">{name}</h5>
                <button onClick={() => dispatch(detailPokemon(id))} className="btn btn-primary">{t('details')}</button>
            </div>
        </div>
    )
}