import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

import { FiltertodosPipe } from './filtertodos.pipe';

import { MyAutofocus } from './my-autofocus.directive.ts.directive';
import { ToDosReducer } from "app/ngrx/todos.reducer";
import { StatusReducer } from "app/ngrx/status.reducer";




@NgModule({
  declarations: [
    AppComponent,
    MyAutofocus,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    FiltertodosPipe
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ 
      todos: ToDosReducer,
      status:StatusReducer 
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
