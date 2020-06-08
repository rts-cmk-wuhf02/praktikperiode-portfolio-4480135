import React, { useState, useLayoutEffect } from "react";
import ImageSide from "./ImageSide";

import "../css/creationDetails.scss";

const CreationDetails = (props) => {
    const [creation, setCreation] = useState({ id: undefined });

    useLayoutEffect(() => {
        if (!creation.id && !creation.error) {
            console.log(props);

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
    );
};

export default CreationDetails;
