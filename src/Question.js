import React, { useState,  useEffect } from 'react';


const Question = ({question, resultStatus}) => {
    return <div>
        <div> {JSON.stringify(question)} </div>
        <div> {JSON.stringify(resultStatus)} </div>
    </div>
};

export default Question;
