/*eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
    <div>
      <button onClick={onIncrement}>
        Increment
      </button>
      {' '}
      <button onClick={onDecrement}>
        Decrement
      </button>
      {' '}
      <button onClick={onIncrementAsync}>
        Increment Async
      </button>
      <hr />
      <div>
        Clicked: {value} times
        {/* Counter: {store.getState().counter} */}
      </div>
    </div>


Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ value: state.counter });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, null)(Counter);


// export default Counter
