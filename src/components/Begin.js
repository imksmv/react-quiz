import React from "react";
import "./Begin.css";
import blueBlob from "../images/blue-blob.svg";
import yellowBlob from "../images/yellow-blob.svg";

const Begin = (props) => {
    return (
        <section className="begin">
            <img className="blue-blob" src={blueBlob} alt="Blue Blob" />
            <img className="yellow-blob" src={yellowBlob} alt="Yellow Blob" />
            {props.isBegin && (
                <div className="begin__inner">
                    <h1 className="begin__title">Quizzical</h1>
                    <h4 className="begin__description">Enjoy a fun quiz!</h4>
                    <button
                        className="begin__button button"
                        onClick={props.handleClick}
                    >
                        Start Quiz
                    </button>
                </div>
            )}
        </section>
    );
};

export default Begin;
