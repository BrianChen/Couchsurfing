```js
{
  currentUser: {
    id: 1,
    name: "John Ryan",
    email: "johnR123@gmail.com",
    birthdate: 10-02-1991,
    gender: "M",
    about_me: "Living in SF. Adventurous traveler!"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },
  listings: {
    1: {
      address: "192-23 mission st",
      city: "San Francisco",
      description: "Comfortable floor to stay",
      max_guests: 2,
      accepting_guests: true
    }
  },
  bookings: {
    1: {
      listing_id: 1,
      booker_id: 1,
      status: true,
      check_in: 11-02-2016,
      check_out: 11-05-2016
    }
  }
  reviews: {
    1: {
      user_id: 2,
      ratings: "positive",
      comment: "It was an awesome stay!",
      listing_id: 1,
      booker_id: 1
    }
  }
}
```
