import { Component, Input, OnInit } from '@angular/core';
import { Character, RequestResponse } from 'src/app/models/rick-and-morty-models';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.scss']
})
export class RickAndMortyComponent {
  @Input() characters: Character[] | null = [];
}
