import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

import Header from './components/Header';
import Profile from './components/users/Profile';
import EditProfile from './components/users/EditProfile';
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
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route exact path="/users/:userId" component={Profile} />
              <Route exact path="/users/:userId/edit" component={EditProfile} />
              <Route exact path='/paintings/:id' component={Show}/>
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
