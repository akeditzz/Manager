import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_FIREBASE_UPDATE,
    EMPLOYEE_FIRE
} from '../actions/Types'

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_FIRE:
        case EMPLOYEE_FIREBASE_UPDATE:
        case EMPLOYEE_CREATE:
        case 'reset':
            return INITIAL_STATE
        default:
            return state;
    }
}