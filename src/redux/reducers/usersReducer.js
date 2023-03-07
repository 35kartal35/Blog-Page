import actionTypes from "../actions/actionTypes";

const initialState = {
    pending: false,
    success: false,
    users: [],
    error: false,
    errorMesage: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.userAction.GET_USERS_START:
            return {
                ...state,
                pending: true


            }

        case actionTypes.userAction.GET_USERS_SUCCESS:
            return {
                ...state,
                pending: false,
                success: true,
                error: false,
                users: action.payload
            }

        case actionTypes.userAction.GET_USERS_FAIL:
            return {
                ...state,
                pending: false,
                success: false,
                error: true,
                errorMesage: action.payload
            }
        default:
            return state
    }
}

export default userReducer