import React from 'react';

class AboutUs extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='about-us'>
        <span>We envision a world made better by travel and travel made richer by connection. Couchsurfers share their lives with the people they encounter, fostering cultural exchange and mutual respect.</span>
        <p>Floorsurfing is a parody inspired by couchsurfing, where you can find hosts and host guests for free. Timesurfing is coded by me, Matt Ehrlich, as a demonstration of my skills while I am looking for a developer job. The backend is coded using Ruby on Rails, with postgresql for the database. The frontend uses React and Redux as a javascript framework. The project couldn't be done without using google apis, particularly, google maps, google places, and google autocomplete.</p>
        <p>If you are looking for a frontend or fullstack engineer who has experience with Ruby, Rails, Javascript, React, Redux, googleapis, HTML5, CSS3, and a little Node, Express, Angular, and MongoDB experience, please contact me. </p>
      </div>
    );
  }
}

export default AboutUs;
