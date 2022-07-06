import { nanoid } from "nanoid";
import React from "react";
import "./App.css";
import Begin from "./components/Begin";
import Quiz from "./components/Quiz";

function App() {
    const [allQuestions, setAllQuestions] = React.useState([]);
    const [isBegin, setIsBegin] = React.useState(true);
    const [isQuiz, setIsQuiz] = React.useState(false);
    console.log(allQuestions);
    function handleClick() {
        setIsBegin(false);
        setIsQuiz(true);
    }

    React.useEffect(() => {
        fetch(
            "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
        )
            .then((res) => res.json())
            .then((dataArray) => setAllQuestions(dataArray.results));
    }, []);

    const questionElements = allQuestions.map((question) => (
        <Quiz key={nanoid()} {...question} isQuiz={isQuiz} />
    ));

    return (
        <div className="wrapper">
            <Begin handleClick={handleClick} isBegin={isBegin} />
            {questionElements}
        </div>
    );
}

export default App;
