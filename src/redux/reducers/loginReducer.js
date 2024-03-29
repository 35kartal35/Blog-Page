import actionTypes from "../actions/actionTypes";

const initialState = {
    pending: false,
    success: false,
    login: [],
    error: false,
    errorMesage: ""
}

const loginReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.loginActions.LOGIN_START:
            return {
                ...state,
                pending: true,
            };

        case actionTypes.loginActions.LOGIN_SUCCESS:
            return {
                ...state,
                pending: false,
                success: true,
                error: false,
                blogs: action.payload,
            };

        case actionTypes.loginActions.LOGIN_FAIL:
            return {
                ...state,
                pending: false,
                success: false,
                error: true,
                errorMesage: action.payload,
            };
        case actionTypes.loginActions.LAGOUT:
            localStorage.setItem("loginState", JSON.stringify(initialState));
            return initialState;
        default:
            return state;
    }
};

export default loginReducer;