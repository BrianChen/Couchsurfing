import React from 'react';
import { Link } from 'react-router';

import Footer from './footer';

class About extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      subPage: 'ABOUT'
    }
  }

  render() {
    return (
      <div id="about">
        <div id="about-header">
          <div className="about-img">
            <h3>Floorsurfing</h3>
            <h1>Take a journey and discover</h1>
          </div>
        </div>
        <div className="about-content">
          <div className="about-sidebar">
            <ul>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/howitworks'}>How it works</Link></li>
              <li><Link to={'/safety'}>Safety</Link></li>
            </ul>
          </div>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default About;
