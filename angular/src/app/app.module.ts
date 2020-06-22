import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GameDetailsComponent } from './game/game-details/game-details.component';
import { GameFormComponent } from './game/game-form/game-form.component';
import { GameDeleteComponent } from './game/game-delete/game-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameDetailsComponent,
    GameFormComponent,
    GameDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
