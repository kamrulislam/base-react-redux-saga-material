import React from 'react';
import './App.css';

import Counter from './Counter'
import store from './configureStore';
// import Clock from './Clock';
import ClockSvg from './ClockSvg';

const action = type => store.dispatch({type});

console.log(store.getState());

function App() {
  
  return (
    <div className="App App-background">
      <header className="App-header">
        React Base App
      </header>
      <Counter 
        value={store.getState().counter}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')}
        onIncrementAsync={() => action('INCREMENT_ASYNC')}
      />
      
      {/* <Clock /> */}
      <ClockSvg />
    </div>
  );
}

export default App;
