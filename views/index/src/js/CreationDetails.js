import React, { useState, useLayoutEffect } from "react";

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
        <div className="about-container">
            <section className="logo-wrapper">
                <a href={creation.id ? creation.url : ""}>
                    <img
                        src={creation.id ? creation.image_url : ""}
                        alt="Icon"
                    />
                </a>
            </section>
            <section className="info-wrapper">
                <h1>
                    <a href={creation.id ? creation.url : ""}>
                        {creation.id ? creation.name : ""}
                    </a>
                </h1>
                <p>{creation.id ? creation.description : ""}</p>
            </section>
        </div>
    );
};

export default CreationDetails;
