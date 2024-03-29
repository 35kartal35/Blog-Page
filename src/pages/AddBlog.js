
import Header from "../component/header";
import SubMenu from "../component/SubMenu";
import api from "../api/api";
import endpoints from "../api/endpoints";
import React, { useEffect, useState } from "react";

import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";



const AddBlog = () => {
    const { loginState, categoriesState } = useSelector((state) => state);
    const navigate = useNavigate;
    const dispatch = useDispatch;
    const [form, setForm] = useState({
        id: String(new Date().getTime()),
        title: "",
        description: "",
        content: "",
        img: "",
        categoryId: "0",
        userId: loginState?.user?.userId,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        api.post(endpoints.blogs, form)
            .then(res => {
                dispatch({ type: actionTypes.blogActions.ADD_BLOG, payload: form })
                navigate("/")

            })
            .catch(err => { })


    };




    return (
        <>
            <Header />
            <SubMenu isAdmin={loginState?.user?.role === "admin"} />
            <div style={{ padding: "30px" }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Başlık</Form.Label>
                        <Form.Control
                            value={form.title}
                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Açıklama</Form.Label>
                        <Form.Control
                            value={form.description}
                            onChange={(e) =>
                                setForm({ ...form, description: e.target.value })
                            }
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Resim</Form.Label>
                        <Form.Control
                            value={form.img}
                            onChange={(e) => setForm({ ...form, img: e.target.value })}
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>İçerik</Form.Label>
                        <Form.Control
                            value={form.content}
                            onChange={(e) => setForm({ ...form, content: e.target.value })}
                            type="text"
                        />
                    </Form.Group>
                    <Form.Select
                        value={form.categoryId}
                        onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
                        className="mb-3"
                    >
                        <option value={"0"}>Kategori Seçin</option>
                        {categoriesState?.categories?.map((item) => (
                            <option key={item?.id} value={item?.id}>
                                {item?.name}
                            </option>
                        ))}
                    </Form.Select>
                    <div className="d-flex justify-content-center my-5">
                        <Button className="w-50" variant="primary" type="submit">Kaydet</Button>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default AddBlog;