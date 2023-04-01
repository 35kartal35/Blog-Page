import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../component/header";
import SubMenu from "../component/SubMenu";
import ListBlog from "../component/ListBlog";


const AdminHome = () => {
    const { loginState } = useSelector((state) => state);
    console.log(loginState);
    const navigate = useNavigate

    useEffect(() => {
        if (!loginState.success) navigate("/login");
    }, [loginState]);
    return (
        <div>
            <Header />
            <SubMenu isAdmin={loginState?.user?.role === "admin" ? true : false} />
            <ListBlog />
        </div>
    );
};

export default AdminHome;