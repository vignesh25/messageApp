import React from 'react';
import './App.css';
import { HashRouter, Route, Router, Switch } from 'react-router-dom';
import chatMessage from './components/chatMessage';
import contacts from './components/contacts/contacts';
import history from './history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div className="App-header">
          <Switch>
            <Route exact={true} path="/" component={chatMessage} />
            <Route exact={true} path="/contacts" component={contacts} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
