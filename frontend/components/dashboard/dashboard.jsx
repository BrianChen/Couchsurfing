import React from 'react';
import PropTypes from 'prop-types';

import HeaderContainer from '../Header/header_container';
import UserBox from './user_box';
import UserBoxContainer from './user_box_container';
import Bookings from './bookings';

const Dashboard = ({bookings, guests}) => {
  return (
    <main className="dashboard-main">
      <UserBoxContainer />
      <section className="dashboard-right">
        <Bookings bookings={bookings} isTravelPlans={true} />
        <Bookings bookings={guests} isTravelPlans={false} />
      </section>
    </main>
  );
}

Dashboard.proptypes = {
  bookings: PropTypes.array,
  guests: PropTypes.array
}

export default Dashboard;
