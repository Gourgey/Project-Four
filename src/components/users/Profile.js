import React from 'react';
import axios from 'axios';
import { decodeToken, getHeader } from '../../lib/auth';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.userId}`, getHeader())
      .then(res => {
        this.setState({ user: res.data });
      });
  }

  render() {
    const user = this.state.user;
    console.log(user);
    return(
      <main>
        { user
          ?
          <div>
            <div>
              <p>{user.username}</p>
              <img src={user.picture}/>
            </div>
          </div>
          :
          <p>HALT!</p>
        }
      </main>
    );
  }
}

export default Profile;
