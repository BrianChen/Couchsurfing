import React from 'react';
import ModalStyle from './Auth/modal_style';
import Modal from 'react-modal';
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
        isOpen={this.state.modalOpen}
        onRequestClose={this.onModalClose}
        style={ModalStyle}
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
        </div>
      </main>
    );
  }
}


export default Splash;
