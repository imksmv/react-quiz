import React from "react";
import "./Begin.css";
import blueBlob from "../images/blue-blob.svg";
import yellowBlob from "../images/yellow-blob.svg";

const Begin = () => {
    return (
        <section className="begin">
            <div className="begin__inner">
                <img className="blue-blob" src={blueBlob} alt="Blue Blob" />
                <img
                    className="yellow-blob"
                    src={yellowBlob}
                    alt="Yellow Blob"
                />
                <h1 className="begin__title">Quizzical</h1>
                <h4 className="begin__description">Enjoy the fun quiz!</h4>
                <button className="begin__button button">Start Quiz</button>
            </div>
        </section>
    );
};

export default Begin;
