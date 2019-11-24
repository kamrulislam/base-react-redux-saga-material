import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';  
import Counter from './Counter';
import store from './configureStore';
import Clock from './Clock';
import ClockSvg from './ClockSvg';

const action = type => store.dispatch({type});

console.log(store.getState());

function App() {
  
  return (
    <div className="App App-background">
      <Router>
        <header className="App-header">
          React Base App
          <ul>
            <li>
              <Link to="/clock">Clock</Link>
            </li>
            <li>
              <Link to="/clock-quiz">Clock Quiz</Link>
            </li>
        </ul>
        </header>
        <Switch>
          <Route path="/clock">
            <ClockSvg />
          </Route>
          <Route path="/clock-quiz">
            <Counter 
              value={store.getState().counter}
              onIncrement={() => action('INCREMENT')}
              onDecrement={() => action('DECREMENT')}
              onIncrementAsync={() => action('INCREMENT_ASYNC')}
            />
          </Route>
          {/* <PrivateRoute path="/protected">
            <ProtectedPage />
          </PrivateRoute> */}
        </Switch>
        {/* <Clock /> */}
        {/* <ClockSvg /> */}
      </Router>

    </div>
  );
}

export default App;
