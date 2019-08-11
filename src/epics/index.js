import { combineEpics, ofType } from "redux-observable";

import { Observable} from "rxjs";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import { mergeMap, map, catchError } from 'rxjs/operators';
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import { ajax } from "rxjs/observable/dom/ajax";

import { fetchPokemonSuccess, fetchPokemonFailure } from "./../actions/";
import { FETCH_POKEMON } from "./../actions/types";

const fetchPokemonEpic = action$ => action$.pipe(
    ofType(FETCH_POKEMON),
    mergeMap((action) =>
        ajax.getJSON("https://pokeapi.co/api/v2/pokemon/?limit=150").pipe(
          map(response =>  fetchPokemonSuccess(response.results)),
          catchError(err => fetchPokemonFailure(err.message))
        )
      )
  );

export const rootEpic = combineEpics(fetchPokemonEpic);
