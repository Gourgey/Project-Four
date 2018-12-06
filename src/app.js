import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

import Header from './components/Header';
import Home from './components/paintings/Home';
import Index from './components/paintings/Index';
import Show from './components/paintings/Show';
import New from './components/paintings/New';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <main>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/paintings' component={Index}/>
              <Route exact path='/paintings/new' component={New}/>
              <Route exact path='/paintings/:id' component={Show}/>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
