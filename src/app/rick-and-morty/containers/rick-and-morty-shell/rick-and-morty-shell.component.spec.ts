import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortyShellComponent } from './rick-and-morty-shell.component';

describe('RickAndMortyShellComponent', () => {
  let component: RickAndMortyShellComponent;
  let fixture: ComponentFixture<RickAndMortyShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickAndMortyShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickAndMortyShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
