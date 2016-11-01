# Floorsurfing

[Heroku link][heroku] **Note:** This should be a link to your production site

[Trello link][https://trello.com/b/BY41Dlzr/floorsurfing]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/BY41Dlzr/floorsurfing

## Minimum Viable Product

Floorsurfing is a full-stack web application inspired by Couchsurfing. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Spots
- [ ] Bookings of Spots
- [ ] Search spots by location and availability
- [ ] Enable users to write reviews

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Root/Home pages and components (1 day)

**Objective:** Create basic home page skeleton for users and non-users

### Phase 3: Listings models and components (1 days)

**Objective:** Listings can be created, edited, viewed and destroyed

### Phase 4: Bookings models and components (1 day)

**Objective:** Users can request bookings from spot show page, hosts can accept/decline

### Phase 5: Listings Search with Google Maps API (3 days)

**objective:** Functional, bug-free spot search/book feature with google maps

### Phase 6: - Reviews (1 day)

**objective:** Guests and hosts will be given optional review form after trip

### Bonus Features (TBD)
- [ ] Add User profiles
- [ ] Multiple house listings
- [ ] Option to Find Travelers
