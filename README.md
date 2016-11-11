# README

[Floorsurfing live][heroku]
[heroku]: https://floorsurfing.herokuapp.com/#/

Floorsurfing is a full-stack web application that was inspired by Couchsurfing.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features & Implementation

### Single-page app

Floorsurfing uses react and redux to navigate throughout the site without actually changing the site, for a smoother experience. Floorsurfing also uses a responsive design to ensure a good experience on mobile as well.

### User authentication and password encryption

Users are able to sign up and login to the website.  The passwords that the users create as encrypted to ensure safety.  There is also a "guest" login so visitors can browse the site without logging in.

### Listings

Users are able to go on the application and see all the listings in a certain location.  You may drag the google maps and the listings available will update according to the map.  

### Search listings

Google places api and google maps api is used so that users can search for other users to stay with by either typing the location they wish to by scrolling through the map to see different locations. The search results are generated using the bounds of the map to determine which users have latitudes and longitudes within the search area.

### Make a booking

Users can search for listings and by click on the particular listing, they will be brought to the particular listing which will show it's reviews.  From there users can click on the book button and make a booking.  This will then show up in the user's dashboard page as "Travel Plans".  This feature also validates that the times are correct for the booking.

### Future Features

Some of the future features that will be implemented are profile pages, pictures for each user and pictures for listings.  Direct messaging between users are also something to consider for future features.
