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
        <div className="connect">
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/brian-chen-b49a4553">
              <img className="footer-logo linkedin" src="http://res.cloudinary.com/dxfjyn0nq/image/upload/v1486511814/linkedin-logo_omvf3b.png"></img>
            </a>
            <a href="https://github.com/BrianChen">
              <img className="footer-logo github" src="http://res.cloudinary.com/dxfjyn0nq/image/upload/v1485838792/GitHub-Mark-120px-plus_yncggy.png"></img>
            </a>
            <a href="mailto:brianc.cb@gmail.com?Subject=Hello">
              <img className="footer-logo email" src="http://res.cloudinary.com/dxfjyn0nq/image/upload/v1486513120/envelope_ofjawa.png"></img>
            </a>
          </div>
          <p>© 2017 Brian Chen</p>
        </div>
      </section>
    );
  }
}

export default Footer;
