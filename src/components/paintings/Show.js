import axios from 'axios';
import React from 'react';


export default class BurgerShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get(`/api/paintings/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ painting: res.data }, console.log('sata', this.props));
      });
  }

  render() {
    const painting = this.state.painting;
    return (
      <main>
        {painting
          ?
          <div>
            <h1>{painting.name}</h1>
            <h1>{painting.artist}</h1>
            <img src={painting.image} />
          </div>
          :
          <p>Loading...</p>}
      </main>
    );
  }
}
