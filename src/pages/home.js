import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import { useSelector } from "react-redux";
import "../assets/css/main.css"
import CategoriesSection from "../component/categoriesSection";
import SubMenu from "../component/SubMenu";
import ListBlog from "../component/ListBlog";


const Home = () => {
    const { loginState, blogsState } = useSelector((state) => state)
    return (
        <div>
            <Header />
            <main className="mainContainer">
                <CategoriesSection />
                <section className="rightSide"></section>
                <ListBlog />
            </main>
            <SubMenu />
            <Footer />
        </div>
    )
}

export default Home