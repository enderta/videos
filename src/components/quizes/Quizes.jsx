import React, {useState, useEffect} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Quizes = () => {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');


    useEffect(() => {
        fetch('http://localhost:5000/questions')
            .then(res => res.json())
            .then(data => {
                setQuestions(data)
            })
    }, [])


    function handleOptionChange(event) {
        setSelectedOption(event.target.value);
    }

    function handleNextQuestion() {
        // Check if user's answer is correct and increment score if necessary
        if (selectedOption === questions[currentIndex].answer) {
            setScore(score + 1);
        }

        // Move on to next question
        setCurrentIndex(currentIndex + 1);
        setSelectedOption('');
    }

    function handleRestartQuiz() {
        // Reset score and current question index to start quiz over
        setScore(0);
        setCurrentIndex(0);
        setSelectedOption('');
    }



    return (
        <div>
            <div className={"container"}    >
            <h1>Quiz</h1>
            <Card style={{ width: '60rem' }}>
                <Card.Body>
                    {questions.length > 0 ? (
                        <>
                            {currentIndex < questions.length ? (
                                <>
                                    <div>
                                        <h2>{questions[currentIndex].question}</h2>
                                        <div>
                                            <form>
                                                {questions[currentIndex].options.map((option, index) => (
                                                    <div key={index}>
                                                        <input
                                                            type="radio"
                                                            name="option"
                                                            value={option}
                                                            checked={selectedOption === option}
                                                            onChange={handleOptionChange}
                                                        />
                                                        <label>{option}</label>
                                                    </div>
                                                ))}
                                            </form>
                                        </div>
                                        <div>
                                            <Button
                                                variant="primary"
                                                onClick={handleNextQuestion}
                                                disabled={!selectedOption}
                                            >
                                                Next
                                            </Button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <h2>Quiz completed!</h2>
                                        <p>
                                            You scored {score} out of {questions.length}.
                                        </p>
                                        <Button variant="primary" onClick={handleRestartQuiz}>
                                            Restart
                                        </Button>
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        <div>Loading...</div>
                    )}
                </Card.Body>
            </Card>

            </div>
        </div>

    );
};

export default Quizes;