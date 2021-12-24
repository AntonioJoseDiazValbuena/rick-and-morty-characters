import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RickAndMortyComponent } from './rick-and-morty/components/rick-and-morty/rick-and-morty.component';
import { RickAndMortyShellComponent } from './rick-and-morty/containers/rick-and-morty-shell/rick-and-morty-shell.component';

import * as fromRickAndMortyManagement from './state';

@NgModule({
  declarations: [
    AppComponent,
    RickAndMortyComponent,
    RickAndMortyShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('rickAndMortyManagement', fromRickAndMortyManagement.reducer),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([fromRickAndMortyManagement.RickAndMortyEffects])
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
