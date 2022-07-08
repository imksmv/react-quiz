import React from "react";
import "./Begin.css";

const Begin = (props) => {
    return (
        <section className="begin">
            <div className="begin__inner">
                <h1 className="begin__title">Quizzical</h1>
                <h4 className="begin__description">Enjoy a fun quiz!</h4>
                <button className="begin__button button" onClick={props.start}>
                    Start Quiz
                </button>
            </div>
        </section>
    );
};

export default Begin;
