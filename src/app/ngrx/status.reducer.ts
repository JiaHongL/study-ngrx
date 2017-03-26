
import { ActionReducer, Action } from '@ngrx/store';

export const CHANGE_STATUS = 'CHANGE_STATUS';

export function StatusReducer (state: string = 'All', action: Action) {
    switch (action.type) {
        case 'CHANGE_STATUS':
            if (action.payload.status == 'Active') {
                state = action.payload.status;
                return state;
            } else if (action.payload.status == 'Completed') {
                state = action.payload.status;
                return state;
            } else {
                state = 'All';
                return state;
            }
        default:
            return state;
    }
}

