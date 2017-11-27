import React from 'react';
import Modal from 'react-modal';
import SignUpFormContainer from '../Forms/signup_form_container';
import LoginFormContainer from '../Forms/login_form_container';
import { hashHistory, withRouter, Link } from 'react-router';
import SearchBarContainer from './search_bar_container';

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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(bool) {
    this.setState({
      modalOpen: true,
      signup: bool
    })
  }

  handleLogOut() {
    this.props.logout();
  }

  onModalClose() {
    this.setState({modalOpen: false})
  }

  handleGuestLogin() {
    this.props.guestLogin();
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.currentUser && newProps.currentUser ) {
      this.props.router.push('/search');
    }
    if (this.props.currentUser && !newProps.currentUser) {
      this.props.router.push('/');
    }
  }

  setNavButtons() {
    let navButton;
    if (this.props.currentUser) {
      navButton = (
        <div>
          <ul className="header-nav-button">
            <Link to="/dashboard" className="nav-button">My Dashboard</Link>
            <Link to="/" id="log-out-button" className="nav-button" onClick={this.handleLogOut}>Log Out</Link>
          </ul>
        </div>
      )
    } else {
      navButton = (
        <div>
          <ul className="header-nav-button">
            <li><button id="join-button" onClick={this.handleClick.bind(this, true)}>Join</button></li>
            <li><button id="white-button" onClick={this.handleClick.bind(this, false)}>Log In</button></li>
            <li><button id="white-button" onClick={this.handleGuestLogin}>Guest LogIn</button></li>
          </ul>
        </div>
      )
    }
    return navButton;
  }

  setSearchBar() {
    let searchBar;
    if (this.props.currentUser) {
      searchBar = (
        <SearchBarContainer />
      )
    }
    return searchBar;
  }

  render() {
    let component = (this.state.signup) ? <SignUpFormContainer closeModal={this.onModalClose} handleClick={this.handleClick}/> : <LoginFormContainer closeModal={this.onModalClose} handleClick={this.handleClick}/>;
    return (
      <div className = "header-container">
        <Link to="/dashboard" className="logo">Floorsurfing</Link>
        <Modal
          className="splashModal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          >
          {component}
        </Modal>
        {this.setSearchBar()}
        {this.setNavButtons()}
      </div>
    )
  }
}

export default withRouter(Header);
