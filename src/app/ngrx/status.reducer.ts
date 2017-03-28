
import { ActionReducer, Action } from '@ngrx/store';

export const CHANGE_STATUS = 'CHANGE_STATUS';

export function StatusReducer(state: string = 'All', action: Action) {
    switch (action.type) {
        case 'CHANGE_STATUS':
            if (action.payload.status == 'Active' || action.payload.status == 'Completed' || action.payload.status == 'All') {
                return action.payload.status;
            } else {
                return state;
            }
        default:
            return state;
    }
}

