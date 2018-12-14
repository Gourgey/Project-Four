import React from 'react';
import axios from 'axios';
import { authorizationHeader } from '../../lib/auth';
import { Link } from 'react-router-dom';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.userId}`, authorizationHeader())
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
            <img src={user.picture}/>
            <section id="profile"className="hero is-fullheight  is-fullheight-with-navbar">
              <div className="hero-body">
                <div className="container">
                  <h2 className="title is-2 has-text-right user">
                    {user.username} Art Selection
                  </h2>
                </div>
                <div>
                  <h1>You are selling a print of</h1>
                  <Link className="nav-item" to="/paintings"><h1>Im in a dream for £34000</h1></Link>
                  <Link className="nav-item" to="/paintings"><h1>Moe for £800</h1></Link>
                </div>
              </div>
            </section>
          </div>
          :
          <p>HALT!</p>
        }
      </main>
    );
  }
}

export default Profile;
