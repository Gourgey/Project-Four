import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="home-container">
        <img className="home-image" src="http://ikenaga-yasunari.com/174index.jpg" />
      </main>
    );
  }
}

export default Home;
