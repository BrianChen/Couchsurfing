# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!([{
    name: "Sheldon Cooper",
    email: "sheldon@gmail.com",
    password: "password1",
    birthdate: "03-10-1988",
    gender: "M",
    interest: "A neutron walks into a bar and asks how much for a drink. The barman replies for you no charge",
    profile: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481529327/sheldon_copper_hzlsdj.jpg"
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
  },{
    name: "Steph Curry",
    email: "steph@gmail.com",
    password: "password1",
    birthdate: "05-12-1988",
    gender: "M",
    interest: "",
    profile: 'http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481767714/steph_curry_pujkfj.gif'
  },{
    name: "Elon Musk",
    email: "elon@gmail.com",
    password: "password1",
    birthdate: "02-12-1988",
    gender: "M",
    interest: ""
  }, {
    name: "Steve Jobs",
    email: "steve@gmail.com",
    password: "password1",
    birthdate: "02-12-1955",
    gender: "M",
    interest: "apples"
  }, {
    name: "Kobe Bryant",
    email: "kobe@gmail.com",
    password: "password1",
    birthdate: "10-10-1975",
    gender: "M",
    interest: "basketball"
  }, {
    name: "Zac Turner",
    email: "zac@gmail.com",
    password: "password1",
    birthdate: "02-12-1955",
    gender: "M",
    interest: ""
  }, {
    name: "Steve Wozniak",
    email: "wozniak@gmail.com",
    password: "password1",
    birthdate: "02-12-1945",
    gender: "M",
    interest: "apple"
  }, {
    name: "Bill Gates",
    email: "bill@gmail.com",
    password: "password1",
    birthdate: "10-02-1962",
    gender: "M",
    interest: "microsoft"
  }, {
    name: "Brian Chen",
    email: "brian@gmail.com",
    password: "password1",
    birthdate: "02-12-1995",
    gender: "M",
    interest: "software engineering"
  }, {
    name: "Umar Adams",
    email: "umar@gmail.com",
    password: "password1",
    birthdate: "09-04-1978",
    gender: "M",
    interest: "vmturbo"
  }, {
    name: "Jane Mary",
    email: "jane@gmail.com",
    password: "password1",
    birthdate: "12-12-1982",
    gender: "F",
    interest: ""
  }, {
    name: "Jill Florience",
    email: "jill@gmail.com",
    password: "password1",
    birthdate: "07-10-1944",
    gender: "F",
    interest: ""
  }, {
    name: "Jacky Chan",
    email: "jacky@gmail.com",
    password: "password1",
    birthdate: "09-06-1966",
    gender: "M",
    interest: ""
  }, {
    name: "Jimmy Johns",
    email: "jimmy@gmail.com",
    password: "password1",
    birthdate: "01-01-1885",
    gender: "M",
    interest: ""
  }, {
    name: "Francis Spedafino",
    email: "francis@gmail.com",
    password: "password1",
    birthdate: "02-12-1985",
    gender: "M",
    interest: ""
  }, {
    name: "Praveen Kulapally",
    email: "praveen@gmail.com",
    password: "password1",
    birthdate: "08-09-1985",
    gender: "M",
    interest: ""
  }])

Listing.create!([{
    address: "956 Pierce St",
    city: "San Francisco",
    longitude: -122.434932,
    latitude: 37.778911,
    description: "This floor is located 3 stories high.  It has not been cleaned since the picture was taken in 2009 but still remain one of the most popular on this site.  May have company of rats and mices at night but they are super friendly.  We provide breakfast in the morning and a tour guide around the city if neeeded. Book this floor before it is gone!",
    user_id: 1,
    max_guests: 2,
    start_date: "01-11-2016",
    end_date: "01-12-2016",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481511994/floor15_e672he.jpg"
  }, {
    address: "958 Greenwich St",
    city: "San Francisco",
    longitude: -122.415550,
    latitude: 37.801958,
    description: "One of the nicer floors out there. The floor is made of brown wood, as seen on the picture. It even includes some plants for a nice relaxing atmosphere. Rated 5 stars on ratemyfloor.com! It is perfectly located in downtown San Francisco. Has some of the best resturants in town.",
    user_id: 2,
    max_guests: 1,
    start_date: "01-12-2016",
    end_date: "01-12-2017",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481510592/floor2_bkbzky.jpg"
  }, {
    address: "926 Howard Street",
    city: "San Francisco",
    longitude: -122.405741,
    latitude: 37.781262,
    description: "The floor is nice and well located. It's across the street from Muni, so it's very easy to move around San Francisco. It's a little old but has everything one need. The internet is very fast and ideal for business trips. The only downside is that the room walls are too thin, so it's impossible to have phone calls without bothering the other guests.",
    user_id: 3,
    max_guests: 4,
    start_date: "01-12-2016",
    end_date: "01-06-2017",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481511999/floor3_kkutl7.jpg"
  }, {
    address: "572 5th Avenue",
    city: "New York",
    longitude: -73.979163,
    latitude: 40.756497,
    description: "Welcome to paradise on a floor. My floor is close to almost everything. 2 Train stops away from anything you need. 5 mins away from the stop & shop. You’ll love my place because of the soft comfy floor. This floor doesn't have a kitchen, but we do have a microwave and a small refrigerator. My floor is good for couples, solo adventurers, and business travelers.",
    user_id: 4,
    max_guests: 1,
    start_date: "01-11-2016",
    end_date: "09-06-2017",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481512006/floor4_higmbc.jpg"
  }, {
    address: "2111 Mission St",
    city: "San Francisco",
    longitude: -122.419272,
    latitude: 37.763364,
    description: "Beautiful floor in a newly remodeled apt perfect location! USF is many blocks away. Starbucks, restaurants, bars, a liquor store, a large supermarket; ALL a few seconds from the house. Muni stop very far away. No wifi! Check all pictures!",
    user_id: 5,
    max_guests: 2,
    start_date: "07-11-2016",
    end_date: "01-06-2019",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481510595/pexels-photo-172292_oqrda1.jpg"
  }, {
    address: "191 2nd st",
    city: "San Francisco",
    longitude: -122.398265,
    latitude: 37.787071,
    description: "Our social and vibrant floor in downtown SF is the place to stay! Each floor has 4-8 single sections marked with white lines. We focus on creating a community vibe that encourages guests to gather together, share a meal and a floor!",
    user_id: 6,
    max_guests: 3,
    start_date: "03-11-2016",
    end_date: "01-06-2018",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481512005/floor6_bokcpy.jpg"
  }, {
    address: "510 Steiner St",
    city: "San Francisco",
    longitude: -122.432342,
    latitude: 37.774102,
    description: "Very sunny private floor, with your own carpet, private tiles, large closet. Free gym in the building. Convenient location in wherever this place is, long walk to Mission & Hayes Valley. Minutes from MUNI, Bart, and highway to East Bay & Peninsula.",
    user_id: 7,
    max_guests: 1,
    start_date: "03-11-2016",
    end_date: "10-06-2018",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481511998/floor7_dkjatr.jpg"
  }, {
    address: "1399 21st Ave",
    city: "San Francisco",
    longitude: -122.479213,
    latitude: 37.761659,
    description: "The perfect location for a floor! Close to Union Square, Financial District, Ghiradelli Square, Fisherman's Wharf, Lombard Street, Grace Cathedral and everything else. Lively nightlife just outside the door. Cable Cars are 1 block away.",
    user_id: 8,
    max_guests: 2,
    start_date: "07-01-2016",
    end_date: "10-12-2017",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481511995/floor8_thbdjd.jpg"
  }, {
    address: "492 5th Ave",
    city: "San Francisco",
    longitude: -122.462866,
    latitude: 37.779282,
    description: "My floor is in San Francisco. You’ll love my floor because of the brand new complex (it includes many floor just like this one). My floor is good for couples, solo adventurers, business travelers, families, and big groups.",
    user_id: 9,
    max_guests: 3,
    start_date: "10-10-2016",
    end_date: "09-06-2017",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481511994/floor9_cr2ct8.jpg"
  }, {
    address: "1715 20th St",
    city: "San Francisco",
    longitude: -122.398491,
    latitude: 37.759690,
    description: "Immaculate, spacious lower level floor with private entrance and adjacent parking. Comfortable carpet may be included and bathtub available only on tuesdays. Floor feels like your comfy bed back at home but it's not because its a floor!",
    user_id: 10,
    max_guests: 1,
    start_date: "10-10-2016",
    end_date: "01-06-2018",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481511995/floor10_lzbebo.jpg"
  }, {
    address: "1807 Broadway",
    city: "San Francisco",
    longitude: -122.427158,
    latitude: 37.794933,
    description: "Our airy, spacious floor gets tons of light when it is sunny outside, with two bay windows and a great view of the sidewalk. Right off MUNI and walking distance to the BART. You can also use our shared roof deck with 360-degree views of nothing.",
    user_id: 11,
    max_guests: 3,
    start_date: "10-10-2016",
    end_date: "07-08-2018",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481511994/floor11_srskgy.jpg"
  }, {
    address: "28 E 28th St",
    city: "New York",
    longitude: -73.985889,
    latitude: 40.743438,
    description: "Sunny, open, and intimate--this floor boasts a private seperate entrance, granting you solace and peace of mind after a day in the vibrant streets of Bohemian Bushwick. 20 minutes to the city, the apartment is located in the center of Brooklyn's creative mecca. We're just blocks away from arty cafes and bars alike.",
    user_id: 12,
    max_guests: 1,
    start_date: "12-12-2016",
    end_date: "12-12-2018",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481511996/floor12_pldkmt.jpg"
  }, {
    address: "65 Leonard St",
    city: "New York",
    longitude: -74.005565,
    latitude: 40.717700,
    description: "My floor is close to Central Park, Museum Mile, easy access to the 4/5/6 trains and downtown, cultural eats (Cuban, Thai, Italian), and the Upper East Side. You’ll love my place because of it's homey feel, well furnished space, and it's cleanliness.. My floor is good for couples, solo adventurers, business travelers, families (with kids), and big groups.",
    user_id: 13,
    max_guests: 2,
    start_date: "12-12-2016",
    end_date: "12-12-2018",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481510594/floor1_zfka6v.jpg"
  }, {
    address: "350 Grand St",
    city: "New York",
    longitude: -73.989041,
    latitude: 40.717500,
    description: "Located at a great location in lower manhattan, between Soho, Tribeca and Nolita. It's by Hudson River, lots of restaurants and bars, 3 mins walk to subway station. You can get to any cool spots in Manhattan within 20 mins.",
    user_id: 14,
    max_guests: 2,
    start_date: "12-12-2016",
    end_date: "12-12-2018",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481512007/floor14_rrqmgz.jpg"
  }, {
    address: "338 E 20th St",
    city: "New York",
    longitude: -73.980711,
    latitude: 40.735198,
    description: "Enjoy Spring time in NY with this lovely and spacious floor and its large balcony. Real proximity with Manhattan, 3-10min to metro GJML and 2 stops to the city. This floor includes many tiles that has a great texture.",
    user_id: 15,
    max_guests: 1,
    start_date: "12-12-2016",
    end_date: "09-09-2017",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481511997/floor16_c0zb4u.jpg"
  }, {
    address: "50 Nathan Rd",
    city: "Hong Kong",
    longitude: 114.172420,
    latitude: 22.296786,
    description: "Whole floor for up to five people (two snuggle up together) in the very heart of Tsim Sha Tsui, in a quiet street and close to plenty of facilities, shopping, transportations to all over Hong Kong and restaurants. The floor is perfect for everyone",
    user_id: 16,
    max_guests: 5,
    start_date: "12-12-2016",
    end_date: "09-09-2017",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481511997/floor16_c0zb4u.jpg"
  }, {
    address: "28 Kimberley St",
    city: "Hong Kong",
    longitude: 114.173599,
    latitude: 22.300270,
    description: "Cosy floor fully furnished with tiles, 3min from Sheung Wan MTR, 5min walk to Central, in a quiet and trendy area, room available when I am travelling in Asia. To share with my lovely French roommate. Perfect stay to discover the city!",
    user_id: 17,
    max_guests: 3,
    start_date: "12-12-2016",
    end_date: "09-09-2017",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481511994/floor17_kvoeoy.jpg"
  }, {
    address: "109-111 Glouceser Rd",
    city: "Hong Kong",
    longitude: 114.174405,
    latitude: 22.278886,
    description: "Conveniently located near Hollywood road/Art district in a neighborhood where East meets West, this 312 sq.ft. floor is perfect for a weekend getaway or a longer stay in the city. The floor is warm enough even during the winter days.",
    user_id: 18,
    max_guests: 3,
    start_date: "12-12-2016",
    end_date: "09-09-2017",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481511994/floor18_j026ym.jpg"
  }, {
    address: "5 Connaught Rd Central",
    city: "Hong Kong",
    longitude: 114.159341,
    latitude: 22.281889,
    description: "In the heart of HK island. The floor is located beside Hopewell Center, 5 min from MTR, 9/F with lift, fully furnished. The floor is has a bright vibrant atmosphere suitable for people of all ages. Book this floor before it is gone.",
    user_id: 19,
    max_guests: 2,
    start_date: "12-12-2016",
    end_date: "09-09-2017",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481511993/floor19_rnpjrx.jpg"
  }, {
    address: "89 Queensway",
    city: "Hong Kong",
    longitude: 114.162946,
    latitude: 22.279348,
    description: "Lovely, bright floor in a fantastic area with public transport, restaurants and bars all within walking distance. The floor itself is lovely. Message me for more details!",
    user_id: 20,
    max_guests: 1,
    start_date: "12-12-2016",
    end_date: "09-09-2017",
    picture: "http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481511993/floor20_i9jcmp.jpg"
  }]);

  Booking.create!([{
    guest_id: 6,
    listing_id: 1,
    start_date: "01-01-2016",
    end_date: "12-12-2017",
    guests: 1
  }, {
    guest_id: 6,
    listing_id: 17,
    start_date: "12-12-2016",
    end_date: "06-12-2017",
    guests: 2
  }, {
    guest_id: 6,
    listing_id: 4,
    start_date: "03-09-2017",
    end_date: "04-12-2017",
    guests: 1
  }, {
    guest_id: 1,
    listing_id: 6,
    start_date: "12-10-2016",
    end_date: "12-12-2016",
    guests: 1
  }]);

  Review.create!([{
    listing_id: 1,
    rating: 1,
    comment: "The floor was very cold and uncomfortable. It was worst than sleeping on the sidewalk.  I contacted the owner during my stay because there was a leak but he ignored my call. Would not recommend this floor to anyone!"
  }, {
    listing_id: 1,
    rating: 4,
    comment: "I thought the floor was great!  I personally love a good cold floor for the night.  It was a rock solid experience and I would definitely stay here again next time I visit San Francisco!  4-stars because I never give 5 star ratings."
  }, {
    listing_id: 1,
    rating: 4,
    comment: "Decent floor.  Not too bad if you are looking for a short stay.  The location is a bit sketchy with homeless people around, no idea why they dont just use this site.  They can get free floors to sleep on."
  }, {
    listing_id: 2,
    rating: 4,
    comment: "Decent floor.  Not too bad if you are looking for a short stay.  The location is a bit sketchy with homeless people around, no idea why they dont just use this site.  They can get free floors to sleep on."
  }, {
    listing_id: 3,
    rating: 4,
    comment: "Decent floor.  Not too bad if you are looking for a short stay.  The location is a bit sketchy with homeless people around, no idea why they dont just use this site.  They can get free floors to sleep on."
  }, {
    listing_id: 4,
    rating: 4,
    comment: "Decent floor.  Not too bad if you are looking for a short stay.  The location is a bit sketchy with homeless people around, no idea why they dont just use this site.  They can get free floors to sleep on."
  }, {
    listing_id: 5,
    rating: 4,
    comment: "Decent floor.  Not too bad if you are looking for a short stay.  The location is a bit sketchy with homeless people around, no idea why they dont just use this site.  They can get free floors to sleep on."
  }, {
    listing_id: 6,
    rating: 4,
    comment: "I thought the floor was great!  I personally love a good cold floor for the night.  It was a rock solid experience and I would definitely stay here again next time I visit San Francisco!  4-stars because I never give 5 star ratings."
  }, {
    listing_id: 7,
    rating: 4,
    comment: "I thought the floor was great!  I personally love a good cold floor for the night.  It was a rock solid experience and I would definitely stay here again next time I visit San Francisco!  4-stars because I never give 5 star ratings."
  }, {
    listing_id: 8,
    rating: 4,
    comment: "I thought the floor was great!  I personally love a good cold floor for the night.  It was a rock solid experience and I would definitely stay here again next time I visit San Francisco!  4-stars because I never give 5 star ratings."
  }, {
    listing_id: 9,
    rating: 4,
    comment: "I thought the floor was great!  I personally love a good cold floor for the night.  It was a rock solid experience and I would definitely stay here again next time I visit San Francisco!  4-stars because I never give 5 star ratings."
  }, {
    listing_id: 10,
    rating: 4,
    comment: "I thought the floor was great!  I personally love a good cold floor for the night.  It was a rock solid experience and I would definitely stay here again next time I visit San Francisco!  4-stars because I never give 5 star ratings."
  }, {
    listing_id: 11,
    rating: 1,
    comment: "Terrible terrible terrible floor.  It was disgusting and dirty.  I don't think it has been cleaned for decades.  During our stay we woke up next to rats and spiders feeding on left overs from previous floorsurfers.  Next time I am booking a hotel, no more floors for me!"
  }, {
    listing_id: 12,
    rating: 1,
    comment: "Terrible terrible terrible floor.  It was disgusting and dirty.  I don't think it has been cleaned for decades.  During our stay we woke up next to rats and spiders feeding on left overs from previous floorsurfers.  Next time I am booking a hotel, no more floors for me!"
  }, {
    listing_id: 13,
    rating: 1,
    comment: "Terrible terrible terrible floor.  It was disgusting and dirty.  I don't think it has been cleaned for decades.  During our stay we woke up next to rats and spiders feeding on left overs from previous floorsurfers.  Next time I am booking a hotel, no more floors for me!"
  }, {
    listing_id: 14,
    rating: 1,
    comment: "Terrible terrible terrible floor.  It was disgusting and dirty.  I don't think it has been cleaned for decades.  During our stay we woke up next to rats and spiders feeding on left overs from previous floorsurfers.  Next time I am booking a hotel, no more floors for me!"
  }, {
    listing_id: 15,
    rating: 1,
    comment: "Terrible terrible terrible floor.  It was disgusting and dirty.  I don't think it has been cleaned for decades.  During our stay we woke up next to rats and spiders feeding on left overs from previous floorsurfers.  Next time I am booking a hotel, no more floors for me!"
  }, {
    listing_id: 16,
    rating: 1,
    comment: "Terrible terrible terrible floor.  It was disgusting and dirty.  I don't think it has been cleaned for decades.  During our stay we woke up next to rats and spiders feeding on left overs from previous floorsurfers.  Next time I am booking a hotel, no more floors for me!"
  }, {
    listing_id: 17,
    rating: 5,
    comment: "I had a wonderful experience in HK and it was thanks to this floor.  There nothing like coming back to a nice clean floor to sleep on after an adventerous day wandering the streets of HK.  Highly recommended."
  }, {
    listing_id: 17,
    rating: 5,
    comment: "Hilton has nothing on this place.  The owner even provided breakfast the next day and was very friendly to live with.  They went out of their way to accomdate everything that we needed such as water and such."
  }, {
    listing_id: 18,
    rating: 1,
    comment: "Terrible terrible terrible floor.  It was disgusting and dirty.  I don't think it has been cleaned for decades.  During our stay we woke up next to rats and spiders feeding on left overs from previous floorsurfers.  Next time I am booking a hotel, no more floors for me!"
  }, {
    listing_id: 19,
    rating: 1,
    comment: "Terrible terrible terrible floor.  It was disgusting and dirty.  I don't think it has been cleaned for decades.  During our stay we woke up next to rats and spiders feeding on left overs from previous floorsurfers.  Next time I am booking a hotel, no more floors for me!"
  }, {
    listing_id: 20,
    rating: 1,
    comment: "Terrible terrible terrible floor.  It was disgusting and dirty.  I don't think it has been cleaned for decades.  During our stay we woke up next to rats and spiders feeding on left overs from previous floorsurfers.  Next time I am booking a hotel, no more floors for me!"
  }, {
    listing_id: 4,
    rating: 1,
    comment: "Terrible terrible terrible floor.  It was disgusting and dirty.  I don't think it has been cleaned for decades.  During our stay we woke up next to rats and spiders feeding on left overs from previous floorsurfers.  Next time I am booking a hotel, no more floors for me!"
  }])
