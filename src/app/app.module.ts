import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewGameComponent } from './new-game/new-game.component';
import { GuessComponent } from './guess/guess.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.router';
import { CodeBreakerService } from './services/code-breaker.service';

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent,
    GuessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CodeBreakerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
