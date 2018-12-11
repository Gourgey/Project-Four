import React from 'react';
import axios from 'axios';
import { saveToken } from '../../lib/auth';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  state = {};

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/login', this.state)
      .then(res => {
        saveToken(res.data.token);
      })
      .then(() => this.props.history.push('/paintings'))
      .catch(() => {
        this.props.history.replace('/login');
      });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <button>Login</button>
        </form>
        <h1>Dont have an account? <Link to="/register">Register here!</Link></h1>
      </section>
    );
  }
}

export default Login;
