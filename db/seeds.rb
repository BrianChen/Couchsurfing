# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!([{
    name: "Jacky Apple",
    email: "jacky@gmail.com",
    password: "password1",
    birthdate: "03-10-1988",
    gender: "M",
    interest: "Gardening and traveling"
  }, {
    name: "Rickey Williams",
    email: "rickey@gmail.com",
    password: "password1",
    birthdate: "02-10-1900",
    gender: "M",
    interest: "Loves to watch old movies"
  }, {
    name: "Zaltana Brewer",
    email: "zaltana@gmail.com",
    password: "password1",
    birthdate: "10-11-1998",
    gender: "F",
    interest: "Enjoys a night out"
  }, {
    name: "Renee Conley",
    email: "renee@gmail.com",
    password: "password1",
    birthdate: "03-10-1980",
    gender: "M",
    interest: "Skydiving, Snowboarding and Hiking"
  },{
    name: "Jake Alan",
    email: "jake@gmail.com",
    password: "password1",
    birthdate: "03-10-1990",
    gender: "M",
    interest: "Interested in interesting stuff"
  }])

Listing.create!([{
    address: "956 Pierce St",
    city: "San Francisco",
    longitude: -122.434932,
    latitude: 37.778911,
    description: "Floor is mopped once a month. Fairly clean!",
    user_id: 1,
    max_guests: 2,
    start_date: "01-11-2016",
    end_date: "01-12-2016"
  }, {
    address: "958 Greenwich St",
    city: "San Francisco",
    longitude: -122.415550,
    latitude: 37.801958,
    description: "Brown wood. May have splinters.",
    user_id: 2,
    max_guests: 1,
    start_date: "01-12-2016",
    end_date: "01-12-2017"
  }, {
    address: "926 Howard Street",
    city: "San Francisco",
    longitude: -122.405741,
    latitude: 37.781262,
    description: "Has carpet.",
    user_id: 3,
    max_guests: 4,
    start_date: "01-12-2016",
    end_date: "01-06-2017"
  }, {
    address: "572 5th Avenue",
    city: "New York",
    longitude: -73.979163,
    latitude: 40.756497,
    description: "Cold hard floor in the heart of NYC",
    user_id: 4,
    max_guests: 1,
    start_date: "01-11-2016",
    end_date: "01-06-2017"
  }]);

  Booking.create!([{
    guest_id: 1,
    listing_id: 2,
    start_date: "19-12-2016",
    end_date: "12-12-2016",
    guests: 1
  }, {
    guest_id: 1,
    listing_id: 3,
    start_date: "01-10-2017",
    end_date: "02-12-2017",
    guests: 2
  }, {
    guest_id: 1,
    listing_id: 4,
    start_date: "03-09-2017",
    end_date: "04-12-2017",
    guests: 1
  }, {
    guest_id: 2,
    listing_id: 1,
    start_date: "12-10-2016",
    end_date: "12-12-2016",
    guests: 1
  }])
