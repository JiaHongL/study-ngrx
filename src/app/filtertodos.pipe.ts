import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtertodos'
})
export class FiltertodosPipe implements PipeTransform {

transform(todos: any, status: string): any {
    const state = status || 'All';
    let result = todos;
    switch (state) {
      case 'Active':
        result = todos.filter(todo => !todo.completed);
        break;
      case 'Completed':
        result = todos.filter(todo => todo.completed);
        break;
    }
    return result;
  }

}
