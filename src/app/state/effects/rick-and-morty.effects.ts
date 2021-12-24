import { Injectable } from "@angular/core";
import { RickAndMortyService } from "../../rick-and-morty/rick-and-morty.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { obtainCharacters, obtainCharactersSuccessful } from "../actions/rick-and-morty.actions";
import { map, mergeMap } from "rxjs";

@Injectable()
export class RickAndMortyEffects {
  constructor(
    private actions$: Actions,
    private rickAndMortyService: RickAndMortyService
  ) { }

  obtainCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(obtainCharacters),
    mergeMap(() => this.rickAndMortyService.obtainCharacters()
      .pipe(
        map(result => obtainCharactersSuccessful({ result }))
      )
    )
  ));
}
