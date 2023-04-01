const actionTypes = {
    blogActions: {
        GET_BLOGS_START: "GET_BLOGS_START",
        GET_BLOGS_SUCCESS: "GET_BLOGS_SUCCESS",
        GET_BLOGS_FAİL: "GET_BLOGS_FAIL",
        ADD_BLOG: "ADD_BLOG"
    },
    categoryActions: {
        GET_CATEGORIES_START: "GET_CATEGORIES_START",
        GET_CATEGORIES_SUCCESS: "GET_CATEGORIES_SUCCESS",
        GET_CATEGORIES_FAIL: "GET_CATEGORIES_FAIL"
    },
    userAction: {
        GET_USERS_START: "GET_USERS_START",
        GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
        GET_USERS_FAIL: "GET_USERS_FAIL"
    },
    loginActions: {
        LOGIN_START: "LOGIN_START",
        LOGIN_SUCCESS: "LOGIN_SUCCESS",
        LOGIN_FAIL: "LOGIN_FAIL",
        LAGOUT: "LAGOUT"
    }
}

export default actionTypes