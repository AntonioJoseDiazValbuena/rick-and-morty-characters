import { Action, createReducer, on } from "@ngrx/store";
import { Character, RequestResponse } from "src/app/models/rick-and-morty-models";
import { obtainCharactersSuccessful } from "../actions/rick-and-morty.actions";

export interface RickAndMortyState {
  result: RequestResponse;
};

export const initialState: RickAndMortyState = {
  result: {
    info: {
      count: 0,
      next: '',
      pages: 0,
      prev: null,
    },
    results: []
  }
};

const rickAndMortyReducer = createReducer(
  initialState,
  on(obtainCharactersSuccessful, (state, action) => ({ ...state, result: { ...action.result } }))
)

export function reducer(state: RickAndMortyState | undefined, action: Action){
  return rickAndMortyReducer(state, action);
}
