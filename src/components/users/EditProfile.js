import React from 'react';
import axios from 'axios';
import { getHeader, decodeToken } from '../../lib/auth';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get(`/api/users/${decodeToken().sub}`, getHeader())
      .then(result=> {
        this.setState( result.data );
      });
  }

  handleSubmit(event) {
    axios.put(`/api/users/${this.props.match.params.userId}`, this.state,  getHeader())
      .then(result => this.props.history.push(`/users/${result.data._id}`));
    event.preventDefault();
  }

  handleChange({ target: { name, value }}) {
    this.setState({ ...this.state, [name]: value });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input onChange={this.handleChange}
            value={this.state.username || ''}
            name="username"
          />
          <label>Picture</label>
          <input onChange={this.handleChange}
            value={this.state.picture || ''}
            name="picture"
          />
          <button onClick={this.handleSubmit}>Edit</button>
        </form>
      </section>
    );
  }
}

export default EditProfile;
