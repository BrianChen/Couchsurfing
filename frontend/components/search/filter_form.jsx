import React from 'react';

class FilterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      start_date: this.props.start_date,
      end_date: this.props.end_date
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDates = this.updateDates.bind(this);
  }

  updateDates(property) {
    return e => this.setState({[property]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateFilter('dates', this.state);
  }

  render() {
    return (
      <div className="filter-form">
        <form id="filter-form">
          <span>Dates</span>
          <input className="start_date-input date-input"
            type="date"
            value={this.state.start_date || ""}
            onChange={this.updateDates('start_date')}/>
          <input className="end_date-input date-input"
            type="date"
            value={this.state.end_date || ""}
            onChange={this.updateDates('end_date')}/>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )};
}

export default FilterForm;
