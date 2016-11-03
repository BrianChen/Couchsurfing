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

  setNavButtons() {
    let navButton;
    if (this.props.currentUser) {
      navButton = (
        <button id="log-out-button" className="nav-button">Log Out</button>
      )
    } else {
      navButton = (
        <ul className="header-nav-button">
          <li><button id="join-button" className="nav-button" onClick={this.__handleClick.bind(this, true)}>Join</button></li>
          <li><button id="log-in-button" className="nav-button" onClick={this.__handleClick.bind(this, false)}>Log In</button></li>
        </ul>
      )
    }
    return navButton;
  }

  render(){
    let component = (this.state.signup) ? <SignUpFormContainer/> : <LoginFormContainer/>;
    let loggedIn = (this.props.currentUser) ? true : false
    let navButton;
    return (
      <div className = "header-container">
        <h3 className = "floorsurfing-logo">Floorsurfing</h3>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            style={ModalStyle}
            >
            {component}
            <button onClick={this.onModalClose}>Close</button>
          </Modal>
          {this.setNavButtons()}
      </div>
    )
  }
}

export default Header;
