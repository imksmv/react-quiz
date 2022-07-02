import React from "react";
import "./App.css";
import Begin from "./components/Begin";
import Quiz from "./components/Quiz";

function App() {
    const [allQuestions, setAllQuestions] = React.useState([]);

    React.useEffect(() => {
        fetch(
            "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
        )
            .then((res) => res.json())
            .then((dataArray) => setAllQuestions(dataArray.results));
    }, []);

    const questionElements = allQuestions.map((question) => <Quiz />);

    return (
        <div className="wrapper">
            <Begin />
            {questionElements}
        </div>
    );
}

export default App;
