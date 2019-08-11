import {FETCH_POKEMON, FETCH_POKEMON_FAILURE, FETCH_POKEMON_SUCCESS} from './types'

export const fetchPokemon = () => 
    {
        console.log("runs");
        return {
 type: FETCH_POKEMON
        }
    };

export const fetchPokemonSuccess = (pokemon) => {
    console.log(pokemon)
    return {
    type: FETCH_POKEMON_SUCCESS,
    payload: pokemon
    }
}
;

export const fetchPokemonFailure = (message) => ({
    type: FETCH_POKEMON_FAILURE,
    payload: message

});