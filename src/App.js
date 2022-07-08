import React from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Begin from "./components/Begin";
import Quiz from "./components/Quiz";
import blueBlob from "./images/blue-blob.svg";
import yellowBlob from "./images/yellow-blob.svg";

function App() {
    const [allQuestions, setAllQuestions] = React.useState([]);
    const [gameStarted, setGameStarted] = React.useState(false);

    React.useEffect(() => {
        fetch(
            "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
        )
            .then((res) => res.json())
            .then((dataArray) => setAllQuestions(dataArray.results));
    }, []);

    const questionElements = allQuestions.map((object) => (
        <Quiz
            key={nanoid()}
            correctAnswer={object.correct_answer}
            wrongAnswers={object.incorrect_answers}
            question={object.question}
        />
    ));

    function start() {
        setGameStarted(!gameStarted);
    }

    return (
        <div className="wrapper">
            <img className="blue-blob" src={blueBlob} alt="Blue Blob" />
            <img className="yellow-blob" src={yellowBlob} alt="Yellow Blob" />
            {gameStarted ? questionElements : <Begin start={start} />}
        </div>
    );
}

export default App;
