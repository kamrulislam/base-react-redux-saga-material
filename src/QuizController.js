import React, { useState,  useEffect } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
// import PropTypes from 'prop-types';


const QuizController = ({quizzes}) => {
    console.log(quizzes);
    const [quizState, updateQuizState] = useState({
        currentQuestionIndex: 0,
        currentQuestion: quizzes[0],
        resultStatus: [],
        totalQuizzes: quizzes.length
    });
    useEffect(() => {
        updateQuizState({
            currentQuestionIndex: 0,
            currentQuestion: quizzes[0],
            resultStatus: [],
            totalQuizzes: quizzes.length 
        });
        return () => {};
    }, [quizzes, quizState.currentQuestionIndex]);
    return <div>
        <div>Question Controller</div>
        <div>{JSON.stringify(quizState)}</div>
        <Question 
            question={ quizState.currentQuestion }
            resultStatus={ quizState.resultStatus }
            />

    </div>
}

export default QuizController;

