import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, deleteToken, decodeToken } from '../lib/auth';
import { getBasket } from '../lib/basket';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    deleteToken();
  }

  render() {
    return (
      <header className="header">
        <div className="heading-container">
          <h1 className="heading-switches">Contemporary</h1>
          <Link className="heading-title" to="/">Āto</Link>
          <h1 className="heading-switches">Traditional</h1>
        </div>
        <nav>
          <div className="nav-container">
            {isAuthenticated() && <Link className="nav-name" to={`/users/${decodeToken().sub}`}>{decodeToken().username}</Link>}
            <Link className="nav-item" to="/paintings">Āto Collection</Link>
            <Link className="nav-item" to='/paintings/new'>Add your Print</Link>
            <Link className="nav-item" to='/basket'>Basket ({getBasket().length} prints) </Link>
            {!isAuthenticated() && <Link className="nav-item" to="/login">Login</Link>}
            {isAuthenticated() && <Link className="nav-item" to="/" onClick={this.handleLogout}>Logout</Link>}
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
