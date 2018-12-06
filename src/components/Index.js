import axios from 'axios';
import React from 'react';
import PaintingBox from './PaintingBox';

class PaintingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    axios.get('/api/paintings')
      .then(result => this.setState({ paintings: result.data }));
  }
  render() {
    return (
      <main>
        <h1>Paintings</h1>
        <div>
          {this.state.paintings && this.state.paintings.map(
            painting => <PaintingBox key={painting._id} painting={painting}/>
          )}
        </div>
      </main>
    );
  }
}

export default PaintingIndex;
