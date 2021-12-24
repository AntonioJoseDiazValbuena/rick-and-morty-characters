import { createAction, props } from "@ngrx/store";
import { RequestResponse } from "src/app/models/rick-and-morty-models";

const origin = '[RickAndMorty]';

export const obtainCharacters = createAction(
  `${origin} Obtain the characters`
);

export const obtainCharactersSuccessful = createAction(
  `${origin} Obtain the characters successful`,
  props<{ result: RequestResponse }>()
);
