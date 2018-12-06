import React from 'react';
import { decodeToken } from '../lib/auth';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.state.purchases);
    return(
      <main>
        {
          <h1>Welcome back! {decodeToken().username}</h1>
        }
      </main>
    );
  }
}

export default Profile;
