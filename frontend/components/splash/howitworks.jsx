import React from 'react';

class HowItWorks extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="howitworks">
        <h1>How It Works</h1>
        <h2>Create a profile</h2>
        <p>First step? Completely fill out your Floorsurfing profile! This will be your home base and is a reflection of you: your lifestyle, your mission and what's important to you. Having a complete profile is the best way to connect with people – whether it's going to your city's weekly event or hosting a guest. Here you can tell people if you're traveling or would like to host. Be sure to include photos.</p>
        <h2>Explore your city</h2>
        <p>If you’re ready to embark on an adventure, search for the city (or cities!) you plan to visit and browse locals with floors available. Look through profiles and references to find people you might want to stay with. When you find a few interesting potential hosts, carefully review their profile and send a request for the dates you’ll be there. Make sure to personalize your messages and tell your host why you want to meet!</p>
        <h2>List your floor</h2>
        <p>Once you’ve explored the site and have been to an event or two, consider making your couch, spare room or air mattress available to travelers. Set your couch status under Couch Information. You can set it to "Not Right Now (but I can hang out)" if you want to be available as a city resource for travelers but are unable to host. You can set it to "No" if you’re not available or don’t have any extra space, or "Maybe/Yes" to show up in search results for travelers who are planning a trip to your area.</p>
      </div>
    );
  }
}

export default HowItWorks;
