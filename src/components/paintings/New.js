import React from 'react';
import axios from 'axios';

class NewPainting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/burgers', this.state)
      .then(() => this.props.history.push('/paintings'));
  }

  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}
            value={this.state.name || ''}
            name="name"
            placeholder="Name"/>
          <input onChange={this.handleChange}
            value={this.state.artist || ''}
            name="artist"
            placeholder="artist"/>
          <input onChange={this.handleChange}
            value={this.state.image || ''}
            name="image"
            placeholder="ImageUrl"/>
          <label>Contemporary?</label>
          <input onChange={this.handleChange}
            value={this.state.contemporary || ''}
            name="contemporary"
            type="checkbox"/>
          <button>Add your print</button>
        </form>
      </main>
    );
  }
}

export default NewPainting;
