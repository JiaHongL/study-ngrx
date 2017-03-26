import { Store } from '@ngrx/store';
import { Observable } from 'rx';
import { Component, OnInit } from '@angular/core';
import { AppState } from "app/ngrx/appstore.interface.ts";



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  todos: Observable<any>;
  status: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.todos = store.select('todos');
    this.status = store.select('status');
  }


  ngOnInit() {
  }

  clearCompleted() {
    this.store.dispatch({ type: "CLEAR_COMPLETED" });
  }

  changeStatus(status) {
    this.store.dispatch({ type: "CHANGE_STATUS", payload: { 'status': status } });
  }

}
