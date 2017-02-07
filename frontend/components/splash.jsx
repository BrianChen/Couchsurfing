import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';

import SignUpFormContainer from './Auth/signup_form_container';
import LoginFormContainer from './Auth/login_form_container';

class Splash extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      signup:null
    };
    this.modal = this.modal.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  handleClick(bool) {
    this.setState({
      modalOpen: true,
      signup: bool
    })
  }

  onModalClose() {
    this.setState({modalOpen: false})
  }

  modal() {
    let component = (this.state.signup) ? <SignUpFormContainer closeModal={this.onModalClose} handleClick={this.handleClick}/> : <LoginFormContainer closeModal={this.onModalClose} handleClick={this.handleClick}/>;
    return (
      <Modal
        className="splashModal"
        isOpen={this.state.modalOpen}
        onRequestClose={this.onModalClose}
        >
        {component}
      </Modal>
    )
  }

  render() {
    return (
      <main className="splash-main">
        <div className="splash-div">
          <section className="splash1">
            <div className="splash1-div">
              <h1>Stay with Locals and Meet Travelers</h1>
              <h2>Share Authentic Travel Experiences</h2>
              <ul>
                <li><button className="splash1-join-button" onClick={this.handleClick.bind(this, true)}>Join With Email</button></li>
                {this.modal()}
              </ul>
            </div>
          </section>

          <section className="splash2">
            <div className="splash2-left">
              <h2>Explore the World</h2>
              <button className="blue-btn"><Link to='/howitworks'>How It Works</Link></button>
            </div>
            <div className="splash2-right">
              <article>
                <h3>Connected With</h3>
                <img src="http://res.cloudinary.com/dxfjyn0nq/image/upload/v1485392793/airplane-11-32_kjgdtg.png"></img>
                <div className="testimonial-images">
                  <figure>
                    <img src="http://res.cloudinary.com/dxfjyn0nq/image/upload/v1485393547/person1_ibiaim.jpg"></img>
                    <figcaption>Alexa</figcaption>
                  </figure>
                  <figure>
                    <img src="http://res.cloudinary.com/dxfjyn0nq/image/upload/v1485394632/person2_ywj6xi.png"></img>
                    <figcaption>Jenny</figcaption>
                  </figure>
                </div>
                <p className="testimonial-subtitle">in New York, New York</p>
                <div className="border"></div>
                <p className="testimonial-text">
                  When I was traveling solo around United States this summer, I used Floorsurfing to meet new people. Jenny was at the weekly Floorsurfing event in New York and I feel so lucky to have met her! I enjoyed our conversations about life, and she showed me the best shop to grab an authentic coffee. After just a few short days of hanging in the city, I felt as though I had known her for years.
                </p>
              </article>
            </div>
          </section>

          <section className="splash2">
            <div className="splash2-right">
              <article>
                <h3>Stayed With</h3>
                <img src="http://res.cloudinary.com/dxfjyn0nq/image/upload/v1485392793/airplane-11-32_kjgdtg.png"></img>
                <div className="testimonial-images">
                  <figure>
                    <img src="http://res.cloudinary.com/dxfjyn0nq/image/upload/v1486421586/person3_p1pvu4.jpg"></img>
                    <figcaption>Jeff</figcaption>
                  </figure>
                  <figure>
                    <img src="http://res.cloudinary.com/dxfjyn0nq/image/upload/v1486421586/person4_kmpiuk.jpg"></img>
                    <figcaption>Anna</figcaption>
                  </figure>
                </div>
                <p className="testimonial-subtitle">in San Francisco, California</p>
                <div className="border"></div>
                <p className="testimonial-text">
                  Anna is amazing! I loved spending time with her, and her openness and caring nature was so genuine and refreshing. When my suitcase didn't arrive until my second day, she was kind enough to loan me the comfiest pajamas to wear to sleep that first night, thank you again! A highlight of my trip includes celebrating her birthday with a dance party in the living room. Hope to see you again soon!
                </p>
              </article>
            </div>
            <div className="splash3-left">
              <h2>Meet New People</h2>
              <button className="orange-btn" onClick={this.handleClick.bind(this, true)}>Plan a Trip</button>
              {this.modal()}
            </div>
          </section>

          <section className="splash-footer">
            <ul>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/howitworks'}>How it Works</Link></li>
              <li><Link to={'/safety'}>Safety</Link></li>
            </ul>
            <p>© 2017 Brian Chen</p>
          </section>
        </div>
      </main>
    );
  }
}


export default Splash;
