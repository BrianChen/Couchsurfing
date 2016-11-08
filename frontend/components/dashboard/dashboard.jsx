import React from 'react';
import HeaderContainer from '../header_container';
import UserBox from './user_box';
import UserBoxContainer from './user_box_container';
import Bookings from './bookings';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="dashboard-main">
        <UserBoxContainer />
        <section className="dashboard-right">
          <Bookings bookings={this.props.bookings} isTravelPlans={true} />
          <Bookings bookings={this.props.guests} isTravelPlans={false} />
        </section>
      </main>
    )
  }
}

export default Dashboard;
