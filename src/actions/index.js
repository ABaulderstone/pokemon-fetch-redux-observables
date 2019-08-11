import {FETCH_POKEMON, FETCH_POKEMON_FAILURE, FETCH_POKEMON_SUCCESS} from './types'

export const fetchPokemon = () => ({
 type: FETCH_POKEMON
});

export const fetchPokemonSuccess = (pokemon) => ({
    type: FETCH_POKEMON_SUCCESS,
    payload: pokemon
});

export const fetchPokemonFailure = (message) => ({
    type: FETCH_POKEMON_FAILURE,
    payload: message

});