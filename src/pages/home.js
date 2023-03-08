import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import { useSelector } from "react-redux";



const Home = () => {
    const appState = useSelector(state => state)
    console.log(appState);
    return (
        <>
            <div className="conteiner">
                <Header />
                <h1>{appState.categoriesState.categories[1].name}</h1>
                {appState.blogsState.blogs[0].title}
                <Footer />
            </div>
        </>
    )
}

export default Home