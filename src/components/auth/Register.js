import React from 'react';
import axios from 'axios';
import { saveToken } from '../../lib/auth';

class Register extends React.Component {
  state = {};

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/register', this.state)
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
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
        </div>
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
        <div>
          <input
            name="picture"
            placeholder="Profile Picture URL"
            onChange={this.handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default Register;
