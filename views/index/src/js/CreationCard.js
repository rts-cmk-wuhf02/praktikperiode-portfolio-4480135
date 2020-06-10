import React from "react";
import { Link } from "@reach/router";

const CreationCard = (props) => {
    return (
        <article className="card">
            <section className="side-a">
                <img src={props.src} alt="" />
            </section>
            <section className="side-b">
                <Link to={`/creation/${props.url_slug}`}>
                    <div className="content">{props.children}</div>
                </Link>
            </section>
        </article>
    );
};

export default CreationCard;
