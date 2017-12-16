import React from 'react';
import { hashHistory, withRouter} from 'react-router';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentUser) {
      this.props.closeModal();
      this.props.router.push('/search')
    }
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {
    return (
      <div>
        <header className="sign-up-header">
          <h1>Join Floorsurfing for free</h1>
        </header>
        <div className="sign-up-content">
          <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.update('name')} value={this.state.name}
              placeholder="Name"/><br/>
            <input type="text" onChange={this.update('email')} value={this.state.email}
              placeholder="Email"/><br/>
            <input type="password" onChange={this.update('password')} value={this.state.password}
              placeholder="Password"/><br/>
            <button id="sign-up-submit-button" type="submit">Join with Email</button>
          </form>
          <div className="sign-up-footer">
            <p>Don't have an account? Use a guest account</p>
            <button id="white-button" onClick={this.props.guestLogin}>Login as Guest</button>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(SignupForm);
