import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { GallowsComponent } from './gallows/gallows.component';
import { WordToGuessComponent } from './word-to-guess/word-to-guess.component';
import { AlphabetButtonComponent } from './gallows/alphabet-button/alphabet-button.component';
import { AnswerDescriptionComponent } from './answer-description/answer-description.component';

@NgModule({
  declarations: [
    AppComponent,
    GallowsComponent,
    WordToGuessComponent,
    AlphabetButtonComponent,
    AnswerDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
