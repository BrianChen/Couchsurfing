import React from 'react';
import HeaderContainer from './header_container';
import UserBox from './user_box';
import UserBoxContainer from './user_box_container';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UserBoxContainer />
      </div>
    )
  }
}

export default Dashboard;
