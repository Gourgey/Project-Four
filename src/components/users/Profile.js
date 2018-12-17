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
            <h2 className="profile-title">
              {user.username} Art Selection
            </h2>
            <section id="profile"className="profile-container">
              <div className="profile-image-container">
                <img className="profile-image" src={user.picture}/>
              </div>
              <div className="profile-selling-details">
                <h1>You are selling a print of:</h1>
                <Link className="nav-item" to="/paintings"><h1>Im in a dream for £34000</h1></Link>
                <Link className="nav-item" to="/paintings"><h1>Moe for £800</h1></Link>
              </div>
            </section>
            <div className="favourite">
              <div>
                <h1 className="favourites-title">Your favourite Painting:</h1>
                <h1 className="favourites-details">Painting Spring by Kawai Gyokudo</h1>
              </div>
              <img src="https://static1.squarespace.com/static/58fd82dbbf629ab224f81b68/t/59c34a0849fc2bba91f33d8a/1505970698435/Kawai-Gyokudo-Parting-Spring-Japanese-Painting-Part-1.jpg?format=1000w" />
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
