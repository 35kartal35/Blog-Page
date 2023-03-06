import actionTypes from "../actions/actionTypes";

const initialState = {
    pending: false,
    success: false,
    blogs: [],
    error: false,
    errorMesage: ""
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.categoryActions.GET_CATEGORIES_START:
            return {
                ...state,
                pending: true


            }

        case actionTypes.categoryActions.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                pending: false,
                success: true,
                error: false,
                blogs: action.payload
            }

        case actionTypes.categoryActions.GET_CATEGORIES_FAIL:
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

export default categoryReducer