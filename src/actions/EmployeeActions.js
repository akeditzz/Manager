import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_FIREBASE_UPDATE,
    EMPLOYEE_FIRE
} from './Types'

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}

export const employeeFormReset = () => {
    return {
        type: "reset"
    }
}

export const employeeFire = ({uid}) => {
    const { currentUser } = firebase.auth()
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                Actions.pop()
                dispatch({ type: EMPLOYEE_FIRE })
            })
    }
}

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth()

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                Actions.pop()
                dispatch({ type: EMPLOYEE_CREATE })
            })
    }
}

export const employeeDetailsPopulate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth()

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                Actions.pop()
                dispatch({ type: EMPLOYEE_CREATE })
            })
    }
}

export const employeeFirebaseUpdate = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth()

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                Actions.pop()
                dispatch({ type: EMPLOYEE_FIREBASE_UPDATE })
            })
    }
}

export const employeesFetch = () => {
    const { currentUser } = firebase.auth()
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() })
            })
    }
}