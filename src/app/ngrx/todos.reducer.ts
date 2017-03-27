import { ActionReducer, Action } from '@ngrx/store';
import { ItemState } from "app/ngrx/appstore.interface.ts";



export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const ALL_ACTIVE = 'ALL_ACTIVE';
export const ALL_COMPLETED = 'ALL_COMPLETED';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

// 1.aot compile 過不了. PS:Aot規範
// export const ToDosReducer = (state: Array<ItemState> = [], action: Action) => {
// 2.aot 可以過.
export function ToDosReducer (state: Array<ItemState> = [], action: Action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.payload.text
                },
                ...state
            ]
        case 'DELETE_TODO':
            return state.filter(todo =>
                todo.id !== action.payload.id
            )
        case 'EDIT_TODO':
            return state.map(todo =>
                todo.id === action.payload.id ?
                    { ...todo, completed: action.payload.completed, text: action.payload.text } :
                    todo
            )
        case 'COMPLETE_TODO':
            return state.map(todo =>
                todo.id === action.payload.id ?
                    { ...todo, completed: !todo.completed } :
                    todo
            )
        case 'COMPLETE_ALL':
            const areAllMarked = state.every(todo => todo.completed)
            return state.map(todo => ({
                ...todo,
                completed: !areAllMarked
            }))
        case 'CLEAR_COMPLETED':
            return state.filter(todo => todo.completed === false)
        default:
            return state;
    }
}

