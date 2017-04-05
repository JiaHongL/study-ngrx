import { ActionReducer, Action } from '@ngrx/store';
import { Items } from "app/ngrx/appstore.interface";


export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const ALL_ACTIVE = 'ALL_ACTIVE';
export const ALL_COMPLETED = 'ALL_COMPLETED';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export function ToDosReducer (state: Array<Items> = [], action: Action) {
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
                    { ...todo, text: action.payload.text } :
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

