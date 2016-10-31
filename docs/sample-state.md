{
  currentUser: {
    id: 1,
    name: "brian chen",
    email: "brianc.cb@gmail.com",
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },
  listings: {
    1: {
      id: 1,
      address: "208-87 mission st",
      description: "great living space",
      host_id: 2,
      reviews: {
        1: {
          id: 1,
          user_id: 2,
          rating: 5,
          comment: "It was an amazing experience"
        }
      }
    }
  }
  bookings: {
    1: {
      isAvailable: true,
      check_in: 02/15/2016,
      check_out: 02/16/206,
      listing_id: 1,
      host_id: 1
    }
  }

}
