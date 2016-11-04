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
        <h3>Log In</h3><br/>
        <form className="login-modal-form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.email} placeholder="Email"
            onChange={this.update('email')}/><br/>
          <input type="password" value={this.state.password} placeholder="Password"
            onChange={this.update('password')}/><br/>

          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default withRouter(LoginForm);
