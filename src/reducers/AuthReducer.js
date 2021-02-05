import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    SHOW_SPINNER
} from '../actions/Types'
const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
}
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case LOGIN_USER_SUCCESS:
            return { ...state, 
                ...INITIAL_STATE,
                user: action.payload}
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed' ,loading:false}
        case SHOW_SPINNER:
            return {...state,error:'',loading:true}
        default:
            return state
    }
}