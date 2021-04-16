import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { Contadormodule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    Contadormodule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
