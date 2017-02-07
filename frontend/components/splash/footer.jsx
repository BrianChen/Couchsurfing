import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="splash-footer">
        <ul>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/howitworks'}>How it Works</Link></li>
          <li><Link to={'/safety'}>Safety</Link></li>
        </ul>
        <p>© 2017 Brian Chen</p>
      </section>
    );
  }
}

export default Footer;
