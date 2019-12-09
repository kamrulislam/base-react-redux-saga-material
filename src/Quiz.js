import React, { useState,  useEffect } from 'react';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuizController from './QuizController';




const Quiz = ({ value, onFetch }) => {
    

    useEffect(() => {
        console.log(value);
        onFetch();
        console.log('current value', value);
        return () => {};
    }, []);

return value.quizzes ?  <div>
            <h3>Quiz</h3>
            {/* <div>{JSON.stringify(value.quizzes)}</div> */}
            <QuizController quizzes={value.quizzes} />
        </div> 
        : <div>
            <h3>Quiz</h3>
            <div>no quiz found</div>
        </div>
}

Quiz.propTypes = {
    value: PropTypes.object,
    onFetch: PropTypes.func.isRequired
  }

const mapStateToProps = state => { 
    console.log(state);
    return {
        value: {
            quizzes: state.quiz && state.quiz.quizzes && state.quiz.quizzes.slice(0,10) || 
                    []
        }
    }; 
};


export default connect(mapStateToProps, null)(Quiz);