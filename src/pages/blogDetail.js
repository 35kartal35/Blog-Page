import React from "react";
import Header from "../component/header";
import "../assets/css/blogDetail.css"
import foti from "../images/images/blog1.jpg"
import ListBlog from "../component/ListBlog";
import Footer from "../component/footer";

const BlogDetail = () => {
    return (
        <div>
            <Header />
            <ListBlog />
            <Footer />
        </div>
    )
}

export default BlogDetail