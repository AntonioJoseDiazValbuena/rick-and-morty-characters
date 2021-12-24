import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/rick-and-morty-models';
import { getRandomicCharacters, obtainCharacters, RickAndMortyState } from 'src/app/state';

@Component({
  selector: 'app-rick-and-morty-shell',
  templateUrl: './rick-and-morty-shell.component.html',
  styleUrls: ['./rick-and-morty-shell.component.scss']
})
export class RickAndMortyShellComponent {
  characters$: Observable<Character[]>;

  constructor(private store: Store<RickAndMortyState>) {
    this.store.dispatch(obtainCharacters());
    this.characters$ = this.store.pipe(select(getRandomicCharacters));
  }
}
