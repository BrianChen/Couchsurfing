import React from 'react';

class AboutUs extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='about-us'>
        <p>Floorsurfing is a full stack web application inspired by Couchsurfing, where you can find hosts and host guests for free. It utilizes Ruby on Rails for the backend and React-Redux on the frontend.</p>
        <p>
          Floorsurfing was a project I started with the goal of learning more about React-Redux framework as well as gaining experience in connecting the backend and frontend together.  The backend validates the users and the booking constraints of listings using Ruby on Rails and postgresql as the database.  The frontend uses React and Redux as well as Google Maps API.
        </p>
        <p>Are you in need of a software engineer that have experience in working at both ends of the stack? Or perhaps you are looking for someone who is ethutastic about learning new technologies and grow with the company? Lets get in touch!
        </p>
      </div>
    );
  }
}

export default AboutUs;
