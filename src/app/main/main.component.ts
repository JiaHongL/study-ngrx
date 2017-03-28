import { COMPLETE_ALL, COMPLETE_TODO, DELETE_TODO, EDIT_TODO } from './../ngrx/todos.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rx';
import { AppState } from "app/ngrx/appstore.interface.ts";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  todo: string = '';
  todos: Observable<any>;
  status: Observable<any>;
  editedTodo: object;

  constructor(private store: Store<AppState>) {
    this.todos = store.select('todos');
    this.status = store.select('status');
    this.editedTodo = {};
  }
  ngOnInit() {
  }

  completeAll() {
    this.store.dispatch({ type: COMPLETE_ALL });
  }

  toggleCompletion(value: any) {
    this.store.dispatch({ type: COMPLETE_TODO, payload: { 'id': value.id } });
  }

  deleteTodo(value: any) {
    this.store.dispatch({ type: DELETE_TODO, payload: { 'id': value.id } });
  }

  editTodo(value: any) {
    // this.editedTodo = value ; PS:不能這樣丟會有問題,沒透過dispatch,就自動更新store
    //使用展開運算子,變成全新物件.
    this.editedTodo = {...value}; 
  }

  updateTodo(value: any) {
    if (value !== null) {
      this.store.dispatch({ type: EDIT_TODO, payload: { 'id': value.id, 'text': value.text } });
      this.editedTodo = null;
    }
  }


}
