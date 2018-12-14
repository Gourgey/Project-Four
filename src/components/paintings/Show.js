import axios from 'axios';
import React from 'react';
import { handleChange } from '../../lib/common';
import { addItem } from '../../lib/basket';


export default class BurgerShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/paintings/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ painting: res.data }, console.log('hey there', res.data));
      });
  }

  handleClick() {
    console.log(this.state);
    addItem(this.state.painting, parseInt(this.state.quantity));
    this.props.history.push('/basket');
  }

  render() {
    const painting = this.state.painting;
    return (
      <main>
        {painting
          ?
          <div>
            <div>
              <h1>{painting.name}</h1>
              <h1>{painting.artist}</h1>
              <img src={painting.image} />
            </div>
            <div className="columns">
              <div className="field column is-8">
                <label htmlFor="quantity" className="label">Quantity</label>
                <input className="input" type="number" name="quantity"
                  value={this.state.quantity || 0} onChange={this.handleChange}/>
              </div>
              <div className="column is-4">
                <button className="button" onClick={this.handleClick}>Add to basket</button>
              </div>
            </div>
          </div>
          :
          <p>Loading...</p>}
      </main>
    );
  }
}
