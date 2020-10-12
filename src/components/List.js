import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { loadPokemons } from '../actions/pokemon'
import { PokemonCard } from './PokemonCard'
import { PokemonModal } from './PokemonModal';


export const List = () => {
    const dispatch = useDispatch();
    const { results: fullPokemons } = useSelector(state => state.Pokemon.pokemons)
    const { active: activePokemon } = useSelector(state => state.Pokemon)

    useEffect(() => {

        dispatch(loadPokemons())

    }, [dispatch])

    return (
        <div className="d-flex flex-wrap justify-content-center">
           <PokemonModal details={activePokemon} />
            {
                fullPokemons ?
                    fullPokemons.map((pokemon, index) => {
                        let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
                        let pokeIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2]
                        return <PokemonCard key={index} name={pokemon.name} image={`${url}/${pokeIndex}.png?raw=true`} id={pokeIndex}/>
                    }) : (<div className="spinner-border text-primary"></div>)}
        </div>
    )
}