import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import ProgressBar from "./ProgressBar";

import ImageSide from "./ImageSide";
import Layout from "./Layout";

const Home = () => {
    return (
        <Layout title="Home" slug="" description="" keywords={[]}>
            <div className="home-container">
                <ImageSide
                    name="MadCreativity"
                    image_src={require("../assets/images/logo.png")}
                >
                    <h1>MadCreativity</h1>
                    <p>
                        I have been programming since 2013, starting at age 10.
                        Since then, I have mainly focused on web development and
                        desktop applications. I'm always interested in a
                        challenge.
                    </p>

                    <section className="skills">
                        <h2>Knowledge/Skillset</h2>
                        <ProgressBar title="HTML/CSS" percentage={95} />
                        <ProgressBar
                            title="JavaScript/Node.js"
                            percentage={90}
                        />
                        <ProgressBar title="C++" percentage={55} />
                        <ProgressBar title="Python/C#/Other" percentage={30} />
                    </section>

                    <section className="socials">
                        <a href="https://github.com/aam051102" target="blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </section>
                </ImageSide>
            </div>
        </Layout>
    );
};

export default Home;
