import React from 'react';

class UserBox extends React.Component {

  constructor(props) {
    super(props);
  }

  getEmail() {
    if (this.props.currentUser.email) {
      return (this.props.currentUser.email);
    } else {
      console.log("email is null");
    }
  }

  render() {
    return(
      <div>
        fsd
        // <h1>{this.getEmail}</h1>
        <h1>{this.props.currentUser.email}</h1>
      </div>
    )
  }
}

export default UserBox;
