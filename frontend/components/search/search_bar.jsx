import React from 'react';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    this.props.router.push('/search');
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  componentWillReceiveProps(newProps) {

  }

  render() {
    return (
      <form>
        <input onChange={this.update('city')} type="text" name="search" value={this.state.city} placeholder="Where are you going?"></input>
      </form>
    )
  }
}

export default withRouter(SearchBar);
