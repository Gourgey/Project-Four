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

  // <label>Contemporary?</label>
  // <input onChange={this.handleChange}
  //   value={this.state.contemporary || ''}
  //   name="contemporary"
  //   type="checkbox"/>


  <section class="section is-small">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <!-- <h3 class="title has-text-grey has-text-centered">Edit {{ country.name }}</h3> -->
        <h3 class="title has-text-grey has-text-centered">Edit</h3>

        <form ng-submit="handleSubmit()">
          <div class="field">
            <label class="label has-text-grey">Country</label>
            <div class="control">
              <input class="input" ng-model="country.name">
            </div>
          </div>

          <div class="field">
            <label class="label has-text-grey">Region</label>
            <div class="control">
              <input class="input" ng-model="country.region">
            </div>
          </div>

          <div class="field">
            <label class="label has-text-grey">Flag Url</label>
            <div class="control">
              <input class="input" ng-model="country.flagUrl">
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input class="input" type="hidden" ng-model="country.alpha3Code">
            </div>
          </div>
          <div class="content has-text-centered">
            <button class="button is-dark">update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </section>




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
          <button>Add your print</button>
        </form>
      </main>
    );
  }
}

export default NewPainting;
