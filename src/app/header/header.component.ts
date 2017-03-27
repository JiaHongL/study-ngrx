import { ADD_TODO } from './../ngrx/todos.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rx';
import { Component, OnInit } from '@angular/core';
import { AppState } from "app/ngrx/appstore.interface.ts";




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  todos: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.todos = store.select('todos');
  }

  ngOnInit() {
  }

    onEnter(value: string) {
    if (value !== '') {
      this.store.dispatch({ type: ADD_TODO, payload: { 'completed': false, 'text': value } });
    }
  }

}
