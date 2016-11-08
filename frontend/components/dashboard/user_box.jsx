import React from 'react';

class UserBox extends React.Component {

  constructor(props) {
    super(props);

    this.modifyDropdown = this.modifyDropdown.bind(this);
    this.changeHostStatus = this.changeHostStatus.bind(this);
  }

  toggleDropDown() {
    document.getElementById("toggle_dropdown").classList.toggle("show");
  }

  modifyDropdown(event) {
    if (!event.target.matches('.dropdown-button')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  changeHostStatus(is_accepting) {
    // if (this.props.currentUser.listing.accepting_guest === is_accepting) {
    //   return
    // } else {
    //   let id = this.props.currentUser.listing.id;
    //   this.props.updateListing({id, accepting_guests: is_accepting})
    // }
    let id = this.props.currentUser.listing.id;
    this.props.updateListing({id, accepting_guests: is_accepting})
  }

  componentDidMount() {
    window.addEventListener('click', this.modifyDropdown);
  }


  render() {
    let host_status = this.props.currentUser.listing.accepting_guests ? "Accepting Guests" : "Not Accepting Guests";

    return(
      <section className="user-box-section">
        <header className="user-box-header">
          <h1>{this.props.currentUser.name}</h1>
        </header>
        <div className="guest-dropdown">
          <button onClick={this.toggleDropDown} className="dropdown-button">{host_status} ▼</button>
          <div id="toggle_dropdown" className="dropdown-content">
            <button onClick={this.changeHostStatus.bind(this, true)} className="accepting-button">Accepting Guests</button>
            <button onClick={this.changeHostStatus.bind(this, false)} className="not-accepting-button">Not Accepting Guests</button>
          </div>
        </div>
      </section>
    )
  }
}

export default UserBox;
