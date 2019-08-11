import {FETCH_POKEMON, FETCH_POKEMON_FAILURE, FETCH_POKEMON_SUCCESS} from './../actions/types'


const initialState = {
    pokemon: [],
    isLoading: false,
    error: false
}

export default function rootReducer( state= initialState, action){
    switch (action.type) {
        case FETCH_POKEMON: 
        return {
            ...state, 
            isLoading:true,
            error: null
        };
        case FETCH_POKEMON_SUCCESS: 
        return {
            pokemon: [...action.payload],
            isLoading: false,
            error: null

        };
        case FETCH_POKEMON_FAILURE: 
        return { 
            pokemon: [],
            isLoading: false,
            error: action.payload

        }
        default: 
        return state;
    }
}