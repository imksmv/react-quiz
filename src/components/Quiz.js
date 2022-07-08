import React from "react";
import "./Quiz.css";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

const Quiz = (props) => {
    // const [selectedButton, setSelectedButton] = React.useState(false);
    const buttonLength = [props.correctAnswer, ...props.wrongAnswers];
    const [buttons, setButtons] = React.useState(allNewButtons());

    function generateNewButton() {
        return {
            id: nanoid(),
            correct: props.correctAnswer,
            incorrect: [...props.wrongAnswers],
            isHeld: false,
        };
    }
    console.log(buttons);

    function allNewButtons() {
        const newButton = [];
        for (let i = 0; i < 2; i++) {
            newButton.push(generateNewButton());
        }
        return newButton;
    }

    const buttonElements = buttons.map((object) => (
        <button key={object.id} className="quiz__answer button"></button>
    ));
    // function selected() {
    //     setSelectedButton((prevState) => !prevState);
    // }

    // const correct = {
    //     id: nanoid(),
    //     value: [props.correct_answer],
    //     isCorrect: true,
    // };

    // const wrong = {
    //     id: nanoid(),
    //     value: props.incorrect_answers,
    //     isCorrect: false,
    // };

    // const styles = {
    //     backgroundColor: selectedButton ? "var(--secondary)" : null,
    //     borderColor: selectedButton ? "var(--secondary)" : null,
    // };

    function holdButton(key) {
        setButtons((prevButton) =>
            prevButton.map((answer) => {
                return console.log("haha");
            })
        );
    }

    return (
        <section className="quiz">
            <div className="quiz__inner">
                <h2 className="quiz__question">{decode(props.question)}</h2>
                <div className="quiz__answers">{buttonElements}</div>
            </div>
        </section>
    );
};

export default Quiz;
