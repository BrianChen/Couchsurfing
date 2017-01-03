import React from 'react';
import {hashHistory, withRouter} from 'react-router';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentUser ) {
      this.props.closeModal();
      this.props.router.push('/dashboard');
    }
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {
    return (
      <div>
        <header className="login-header">
          <h1>Log In to Floorsurfing</h1>
        </header>
        <div className="login-content">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.email} placeholder="Email"
              onChange={this.update('email')}/><br/>
            <input type="password" value={this.state.password} placeholder="Password"
              onChange={this.update('password')}/><br/>
            <button id="login-submit-button" type="submit">Log In</button>
          </form>
          <div className="sign-up-footer">
            <p>Don't have an account? Use a guest account</p>
            <button onClick={this.props.guestLogin}id="white-button">Guest Login</button>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(LoginForm);
