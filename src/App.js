import React, { useEffect } from "react";

import api from "./api/api"
import endpoinds from "./api/endpoints"
import actionTypes from "./redux/actions/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import AdminHome from "./pages/AdminHome";


function App() {
  const dispatch = useDispatch();
  const { blogsState, categoriesState, usersState } = useSelector(state => (state));
  useEffect(() => {
    //fetch blogs
    dispatch({ type: actionTypes.blogActions.GET_BLOGS_START })
    api.get(endpoinds.blogs)
      .then((res) =>
        dispatch({
          type: actionTypes.blogActions.GET_BLOGS_SUCCESS,
          payload: res.data,
        })

      )
      .catch((err) => dispatch({
        type: actionTypes.blogActions.GET_BLOGS_FAİL,
        payload: "Blogları çekerken bir hata oluştu"
      }));

    //fetch categories
    dispatch({ type: actionTypes.categoryActions.GET_CATEGORIES_START })
    api.get(endpoinds.categories)
      .then((res) => dispatch({
        type: actionTypes.categoryActions.GET_CATEGORIES_SUCCESS,
        payload: res.data,
      }))
      .catch((err) => dispatch({
        type: actionTypes.categoryActions.GET_CATEGORIES_FAIL,
        payload: "Categorileri çekerken bir hata oluştu"
      }));

    //fetch users
    dispatch({ type: actionTypes.userAction.GET_USERS_START })
    api.get(endpoinds.users)
      .then((res) => dispatch({
        type: actionTypes.userAction.GET_USERS_SUCCESS,
        payload: res.data
      }))
      .catch((err) => dispatch({
        type: actionTypes.userAction.GET_USERS_FAIL,
        payload: "kullanıcı bilgilerini çekerken bir hata oldu..."
      }));


  }, [dispatch]);
  if (!blogsState.success || !categoriesState.success || !usersState.success)
    return null;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
