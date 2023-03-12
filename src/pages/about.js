import React from "react";
import "../assets/css/about.css"
import Header from "../component/header";
import jpeg from "../images/images/blog2.jpg";

const About = () => {
    return (
        <>
            <div>
                <Header />
                <div id="hamburgerMenuBtn" class="menuikoncontainer">
                    <span>
                        <i class="fa-solid fa-bars"></i>
                    </span>
                </div>

                <div>
                    <nav id="navBar">
                        <ul>
                            <li>
                                <h3><a href="../index.html">Anasayfa</a></h3>
                            </li>
                            <li>
                                <h3><a href="./about.html">Hakkımızda</a></h3>
                            </li>
                            <li>
                                <h3><a href="#">Tüm Yazılar</a></h3>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <main class="aboutMainContainer">
                <div class="aboutDescriptionContainer">
                    <div class="aboutDescriptionImg">
                        <img src={jpeg} alt="" />
                    </div>
                    <div class="aboutDescriptionContentContainer">
                        <h3>Mehmet ÖZDEMİR</h3>
                        <h4 class="marginTop20">React & React Native Developer</h4>
                        <p class="marginTop20">
                            Merhaba ben Mehmet, Junior Front-end Developer olarak hayatıma devam etmekteyim.
                            React framework ile projeler yapmaktayım.
                        </p>
                    </div>
                </div>
                <div class="aboutInfosContainer">
                    <div class="aboutInfosLeftContainer">
                        <div>
                            <a href="mailto:mozdemir3545@gmail.com" class="aboutInfosLeftItemContainer">
                                <i class="fa-solid fa-envelopes-bulk"></i>
                                <span>mozdemir3545@gmail.com</span>
                            </a>
                        </div>
                        <div>
                            <a href="tel:+905536768952" class="aboutInfosLeftItemContainer">
                                <i class="fa-solid fa-phone"></i>
                                <span>+90 553 679 8952</span>
                            </a>
                        </div>
                    </div>
                    <div class="aboutInfosRightContainer">
                        <h2>Projeler</h2>
                        <p>
                            Ben Mehmet, 15/09/1987 Kayseri Yeşilhisar doğuluyum. İzmir Buca' da yaşamaktayım.
                            İlköğretim ve Lise eğitimimi Bucada. lisans eğitimimi Süleyman Demirel Üniversitesinde tamamladım.
                            Evliyim ve 2 çocuğum var.
                            Basketbol oynamayı ve kitap okumayı seviyorum.
                        </p>
                    </div>
                </div>
            </main>


        </>
    )
}

export default About