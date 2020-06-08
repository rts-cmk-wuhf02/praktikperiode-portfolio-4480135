import React from "react";
import { Link } from "@reach/router";

const CreationCard = (props) => {
    return (
        <Link to={`/creation/${props.url_slug}`}>
            <article className="card">
                <section className="side-a">
                    <img src={props.src} alt="" />
                </section>
                <section className="side-b">
                    <div className="content">{props.children}</div>
                </section>
            </article>
        </Link>
    );
};

export default CreationCard;
