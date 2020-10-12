import { types } from '../types/types'

const initialState = {
    pokemons: [],
    active: null,
    modal: false
}

export const pokeReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.loadPokemons:
            return {
                ...state,
                pokemons: action.payload
            }

        case types.detailPokemon:
            return {
                ...state,
                active: action.payload,
                modal: true
            }

            case types.clearModal:
            return {
                ...state,
                active: null,
                modal: false
            }

        default:
            return state
    }

}