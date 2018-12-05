import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './components/Index';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <main>
            <Switch>
              <Route exact path='/paintings' component={Index}/>
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
