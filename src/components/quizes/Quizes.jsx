import React, {useState,useEffect} from 'react';

const Quizes = () => {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        // Fetch questions from backend API
        fetch('/api/questions')
            .then(response => response.json())
            .then(data => setQuestions(data));
    }, []);
    console.log(questions)
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


    useEffect(() => {
        fetch('http://localhost:5000/api/questions')
            .then(res => res.json())
            .then(data => {
                setQuestions(data)
            })
    }, [])


    return (
        <div>
           <h1>Quiz</h1>
            {questions.length > 0 ? (
                <>
                    {currentIndex < questions.length ? (
                        <>
                            <div>
                                <div>
                                   <form>
                                       {
                                             questions[currentIndex].options.map((option, index) => (
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
                                            ))

                                       }
                                      </form>
                                </div>
                                <div>
                                    <button onClick={handleNextQuestion}>Next</button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div>
                            <h2>Quiz completed!</h2>
                            <p>Your score is {score} out of {questions.length}.</p>
                            <button onClick={handleRestartQuiz}>Restart Quiz</button>
                        </div>
                    )}
                </>
            ) : (
                <div>Loading...</div>
            )}


        </div>

    );
};

export default Quizes;