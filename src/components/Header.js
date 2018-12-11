import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, deleteToken, decodeToken } from '../lib/auth';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount(){
    axios.get('/api/users')
      .then(result => this.setState({ user: result.data }));
  }

  handleLogout() {
    deleteToken();
  }

  render() {
    return (
      <nav>
        <div className="nav-container">
          <Link className="nav-item" to="/">Home</Link>
          <Link className="nav-item" to="/paintings">Painting-Index</Link>
          <Link className="nav-item" to='/paintings/new'>Add your Print</Link>
          {!isAuthenticated() && <Link className="nav-item" to="/login">Login</Link>}
          {isAuthenticated() && <Link className="nav-item" to="/" onClick={this.handleLogout}>Logout</Link>}
          {isAuthenticated() && <Link className="nav-item" to={`/users/${user._id}`}>{decodeToken().username}</Link>}
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
