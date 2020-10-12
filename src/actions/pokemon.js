import Swal from 'sweetalert2'

import { types } from '../types/types';
import { fetchPokemons } from '../helpers/fetchPokemons'

export const loadPokemons = (next, previous) => {
    return async (dispatch) => {
        try {

            if (!next) {
                const response = await fetchPokemons('pokemon')
                const data = await response.json();
                dispatch(startLoadPokemons(data))
            }

            if (next) {
                const response = await fetch(next)
                const data = await response.json();
                dispatch(startLoadPokemons(data))
            }

            if (previous) {
                const response = await fetch(next)
                const data = await response.json();
                dispatch(startLoadPokemons(data))
            }

        } catch (error) {
            console.log(error)
        }
    }
}

export const detailPokemon = (idPokemon) => {

    return async (dispatch, getState) => {
        try {
            Swal.showLoading()
            const response = await fetchPokemons(`pokemon/${idPokemon}`, {}, 'GET')
            const { stats } = await response.json();
            Swal.close();
            dispatch(startDetailPokemon(stats))

        } catch (error) {
            console.log(error)
        }
    }

}

export const clearModal = () => {
    return (dispatch) => {
        dispatch(startClearModal())
    }
}


const startLoadPokemons = (pokemons) => ({
    type: types.loadPokemons,
    payload: pokemons
})

const startDetailPokemon = (details) => ({
    type: types.detailPokemon,
    payload: details
})

const startClearModal = () => ({
    type: types.clearModal
})