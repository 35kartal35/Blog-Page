import actionTypes from "../actions/actionTypes";

const initialState = {
    pending: false,
    success: false,
    blogs: [],
    error: false,
    errorMesage: ""
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.blogActions.GET_BLOGS_START:
            return {
                ...state,
                pending: true


            }

        case actionTypes.blogActions.GET_BLOGS_SUCCESS:
            return {
                ...state,
                pending: false,
                success: true,
                error: false,
                blogs: action.payload
            }

        case actionTypes.blogActions.GET_BLOGS_FAİL:
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

export default blogReducer