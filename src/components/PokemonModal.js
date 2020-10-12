import React from 'react';
import Modal from 'react-modal';

import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { clearModal } from '../actions/pokemon'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

export const PokemonModal = ({ details }) => {
    const { t } = useTranslation()

    const { modal: modalActive } = useSelector(state => state.Pokemon)
    const dispatch = useDispatch();


    const statsTranslate = [`❤ ${t('hp')}`, `⚔ ${t('attack')}`, `🛡 ${t('defense')}`, `🌌 ${t('special-attack')}`, `🧬 ${t('special-defense')}`, `🏃‍♂️ ${t('speed')}`]

    const closeModal = () => {
        dispatch(clearModal())
    }

    return (
        <Modal
            isOpen={modalActive}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Details"
        >
            <h2>{t('details')}</h2>

            { details ?
                details.map((pokemon, index) => {
                    return (
                        <div key={index} className="mt-3" style={{ width: '20rem' }}>{statsTranslate[index]}
                            <div className="progress" style={{ height: '15px' }}>
                                <div className="progress-bar" role="progressbar" style={{ width: pokemon.base_stat + '%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{pokemon.base_stat}%</div>
                            </div>
                        </div>
                    )
                }) : 'Ops...'
            }
        </Modal>
    )
}