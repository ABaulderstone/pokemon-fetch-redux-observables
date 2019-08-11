import { combineEpics, ofType } from "redux-observable";

import { Observable, of} from "rxjs";

import { mergeMap, map, catchError } from 'rxjs/operators';

import { ajax } from "rxjs/observable/dom/ajax";

import { fetchPokemonSuccess, fetchPokemonFailure } from "./../actions/";
import { FETCH_POKEMON } from "./../actions/types";

const fetchPokemonEpic = action$ => action$.pipe(
    ofType(FETCH_POKEMON),
    mergeMap((action) =>
        ajax.getJSON("https://pokeapi.co/api/v2/pokemon/?limit=150").pipe(
          map(response =>  fetchPokemonSuccess(response.results)),
          catchError(err => of(fetchPokemonFailure(err.message)))
        )
      )
  );

export const rootEpic = combineEpics(fetchPokemonEpic);
