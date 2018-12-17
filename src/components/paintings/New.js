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
    axios.post('/api/paintings', this.state)
      .then(() => this.props.history.push('/paintings'));
  }

  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value });
  }




  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="control">
              <input onChange={this.handleChange}
                className="input"
                value={this.state.name || ''}
                name="name"
                placeholder="Name"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input onChange={this.handleChange}
                className="input"
                value={this.state.artist || ''}
                name="artist"
                placeholder="artist"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input onChange={this.handleChange}
                className="input"
                value={this.state.image || ''}
                name="image"
                placeholder="ImageUrl"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input onChange={this.handleChange}
                className="input"
                value={this.state.price || ''}
                name="price"
                placeholder="price"/>
            </div>
          </div>
          <button>Add your print</button>
        </form>
      </main>
    );
  }
}

export default NewPainting;
