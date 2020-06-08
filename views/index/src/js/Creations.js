import React, { useState, useLayoutEffect } from "react";
import CreationCard from "./CreationCard";

import "../css/creations.scss";

const Creations = () => {
    const [creations, setCreations] = useState([]);

    useLayoutEffect(() => {
        if (creations.length == 0) {
            fetch("/api/get/creations")
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    setCreations(json);
                });
        }
    });

    return (
        <div className="creations-container">
            {creations.map((creation, i) => {
                return (
                    <CreationCard
                        key={i}
                        src={creation.image_url}
                        url_slug={creation.url_slug}
                    >
                        <p>{creation.name}</p>
                    </CreationCard>
                );
            })}
        </div>
    );
};

export default Creations;
