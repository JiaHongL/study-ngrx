import { Observable } from 'rx';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from "app/ngrx/appstore.interface.ts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Observable<any>;

  constructor(private store: Store<AppStore>) {
    this.todos = store.select('todos');
  }  
}
