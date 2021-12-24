import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RickAndMortyState } from "../reducers/rick-and-morty.reducer";

const getRickAndMortyFeature = createFeatureSelector<RickAndMortyState>('rickAndMortyManagement');

export const getCharacters = createSelector(
  getRickAndMortyFeature,
  state => state.result
);

export const getRandomicCharacters = createSelector(
  getCharacters,
  state => [...state.results].sort(() => 0.5 - Math.random()).slice(0, 5) || []
);
