import React from 'react';
import Modal from 'react-modal';
import SignUpFormContainer from './modals/signup_form_container';
import LoginFormContainer from './modals/login_form_container';
import ModalStyle from './modals/modal_style';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      signup: null
    };
    this.onModalClose = this.onModalClose.bind(this);
  }

  __handleClick(bool) {
    this.setState({
      modalOpen: true,
      signup: bool
    })
  }

  onModalClose() {
    this.setState({modalOpen: false})
  }

  render(){
    let component = (this.state.signup) ? <SignUpFormContainer/> : <LoginFormContainer/>;

    return (
      <div>
        <h1>Floorsurfing</h1>
        <button className="log-in-button" onClick={this.__handleClick.bind(this, false)}>Log In</button>
        <button className="sign-up-button" onClick={this.__handleClick.bind(this, true)}>Sign Up</button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}
        >
          {component}
          <button onClick={this.onModalClose}>Close</button>
        </Modal>
      </div>
    )
  }
}

export default Header;
