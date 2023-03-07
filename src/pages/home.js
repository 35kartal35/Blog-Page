import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import { useSelector } from "react-redux";
const Home = () => {
    const appState = useSelector(state => state)
    console.log(appState);
    return (
        <div>
            <Header />

            <Footer />
        </div>

    )
}

export default Home