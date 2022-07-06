import React from "react";
import "./Quiz.css";

const Quiz = (props) => {
    const allAnswers = [props.correct_answer].concat(props.incorrect_answers);

    console.log(allAnswers);

    return (
        <section className="quiz">
            {props.isQuiz && (
                <div className="quiz__inner">
                    <h2 className="quiz__question">{props.question}</h2>
                    <div className="quiz__answers">
                        <button className="quiz__answer button">asd</button>
                        <button className="quiz__answer button">fws</button>
                        <button className="quiz__answer button">asda</button>
                        <button className="quiz__answer button">3qd</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Quiz;
