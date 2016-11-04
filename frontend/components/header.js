import React from 'react';
import Modal from 'react-modal';
import SignUpFormContainer from './Auth/signup_form_container';
import LoginFormContainer from './Auth/login_form_container';
import ModalStyle from './Auth/modal_style';
import { hashHistory, withRouter } from 'react-router';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      signup: null
    };
    this.onModalClose = this.onModalClose.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  __handleClick(bool) {
    this.setState({
      modalOpen: true,
      signup: bool
    })
  }

  handleLogOut() {
    this.props.logout();
    this.props.router.push('/')
  }

  onModalClose() {
    this.setState({modalOpen: false})
  }

  handleGuestLogin() {
    this.props.guestLogin();
  }

  // componentWillReceiveProps(newProps) {
  //   if (newProps.currentUser) {
  //     this.props.router.push('/dashboard');
  //   }
  // }

  setNavButtons() {
    let navButton;
    if (this.props.currentUser) {
      navButton = (
        <button id="log-out-button" className="nav-button" onClick={this.handleLogOut}>Log Out</button>
      )
    } else {
      navButton = (
        <ul className="header-nav-button">
          <li><button id="join-button" className="nav-button" onClick={this.__handleClick.bind(this, true)}>Join</button></li>
          <li><button id="log-in-button" className="nav-button" onClick={this.__handleClick.bind(this, false)}>Log In</button></li>
          <li><button id="guest-login-button" className="nav-button" onClick={this.handleGuestLogin}>Guest LogIn</button></li>
        </ul>
      )
    }
    return navButton;
  }

  render(){
    let component = (this.state.signup) ? <SignUpFormContainer closeModal={this.onModalClose}/> : <LoginFormContainer closeModal={this.onModalClose}/>;
    let loggedIn = (this.props.currentUser) ? true : false
    let navButton;
    return (
      <div className = "header-container">
        <a href="/dashboard" title="Floorsurfing">Floorsurfing</a>
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

export default withRouter(Header);
