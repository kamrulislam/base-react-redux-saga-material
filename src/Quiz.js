import React, { useState,  useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Quiz = ({ value, onFetch }) => {
    

    useEffect(() => {
        console.log(value);
        onFetch();
        return () => {};
    }, []);

    return <div>Quiz</div>
}

export default connect(null, null)(Quiz);