import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import SignUpFormContainer from '../Forms/signup_form_container';
import LoginFormContainer from '../Forms/login_form_container';
import { hashHistory, withRouter, Link } from 'react-router';
import SearchBarContainer from './search_bar_container';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      signup: null,
      showDropdown: false
    };
    this.onModalClose = this.onModalClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.currentUser && newProps.currentUser ) {
      this.props.router.push('/search');
    }
    if (this.props.currentUser && !newProps.currentUser) {
      this.props.router.push('/');
    }
  }

  handleClick(bool) {
    this.setState({
      modalOpen: true,
      signup: bool
    });
  }

  onModalClose() {
    this.setState({modalOpen: false})
  }

  toggleDropdown() {
    if (this.state.showDropdown) {
      this.setState({
        showDropdown: false
      });
    } else {
      this.setState({
        showDropdown: true
      });
    }
  }

  render() {
    let header;
    if (this.props.currentUser) {
      header = this.getAuthHeader();
    } else {
      header = this.getUnAuthHeader();
    }
    return header;
  }

  getAuthHeader() {
    let menuClasses = "dropdown-menu medium-screen";
    let iconClasses;

    if (this.state.showDropdown) {
      iconClasses = "fa fa-angle-up";
    } else {
      iconClasses = "fa fa-angle-down";
      menuClasses += " hidden";
    }

    return (
      <div>
        <div className="header-container">
          {/* This is for small window */}
          <div className="medium-screen dropdown-logo" onClick={this.toggleDropdown}>
            <span className="logo">Floorsurfing</span>
            <i className={iconClasses}></i>
          </div>
          {/* This is for large window */}
          <div className="large-screen nondropdown-logo">
            <Link to="/dashboard" className="logo">Floorsurfing</Link>
          </div>
          <SearchBarContainer />
          <div className="large-screen nav-buttons">
            <ul className="auth-header-nav">
              <Link to="/dashboard" className="nav-button">My Dashboard</Link>
              <Link to="/about" className="nav-button">About</Link>
              <Link to="/" id="log-out-button" className="nav-button" onClick={this.props.logout}>Log Out</Link>
            </ul>
          </div>
        </div>
        <div className={menuClasses}>
          <ul>
            <li><Link to="/dashboard" className="nav-button">My Dashboard</Link></li>
            <li><Link to="/about" className="nav-button">About</Link></li>
            <li><Link to="/howitworks" className="nav-button">How it works</Link></li>
            <li><Link to="/safety" className="nav-button">Safety</Link></li>
            <li><Link to="/" id="log-out-button" className="nav-button" onClick={this.props.logout}>Log Out</Link></li>
          </ul>
        </div>
      </div>
    );
  }

  getUnAuthHeader() {
    let modalForm = (this.state.signup) ? <SignUpFormContainer closeModal={this.onModalClose} handleClick={this.handleClick}/> : <LoginFormContainer closeModal={this.onModalClose} handleClick={this.handleClick}/>;
    return (
      <div className="header-container">
        <Link to="/dashboard" className="logo">Floorsurfing</Link>
        <Modal
          className="splashModal"
          contentLabel="splashModal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          >
          {modalForm}
        </Modal>
        <div className="nav-buttons">
          <div className="header-nav-button">
            <button className="try-me-button" onClick={this.props.guestLogin}>Login as Guest</button>
            <button className="white-button" onClick={this.handleClick.bind(this, true)}>Join</button>
            <button className="login-button white-button" onClick={this.handleClick.bind(this, false)}>Log In</button>
          </div>
        </div>
      </div>
    );
  }
}

Header.proptypes = {
  currentUser: PropTypes.object,
  logout: PropTypes.func,
  login: PropTypes.func,
  guestLogin: PropTypes.func,
}

export default withRouter(Header);
