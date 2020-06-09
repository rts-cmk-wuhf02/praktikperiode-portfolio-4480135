import React, { useState, useLayoutEffect } from "react";
import ImageSide from "./ImageSide";
import Layout from "./Layout";

import "../css/creationDetails.scss";

const CreationDetails = (props) => {
    const [creation, setCreation] = useState({ id: undefined });

    useLayoutEffect(() => {
        if (!creation.id && !creation.error) {
            fetch("/api/get/creations/" + props.url_slug)
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    setCreation(json.error ? json : json[0]);
                });
        }
    });

    return (
        <Layout
            title={creation.name ? creation.name : ""}
            slug={`creation/${creation.url_slug ? creation.url_slug : 2}`}
            description={""}
            keywords={[]}
        >
            <ImageSide
                name={creation.id ? creation.name : ""}
                image_src={creation.id ? creation.image_url : ""}
                image_href={creation.id ? creation.url : ""}
            >
                <h1>
                    <a href={creation.id ? creation.url : ""}>
                        {creation.id ? creation.name : ""}
                    </a>
                </h1>
                <p>{creation.id ? creation.description : ""}</p>
            </ImageSide>
        </Layout>
    );
};

export default CreationDetails;
