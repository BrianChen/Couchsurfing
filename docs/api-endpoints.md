# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Listings

- `GET /api/listings`
- `POST /api/listings`
- `GET /api/listings/:id`
- `PATCH /api/listings/:id`
- `DELETE /api/listings/:id`

### Bookings

- `GET /api/bookings`
- `POST /api/bookings`
- `GET /api/bookings/:id`
- `DELETE /api/bookings/:id`

### Reviews

- `GET /api/listings/:listing_id/reviews`
- `POST /api/users/user_id/reviews`
- `DELETE /api/notes/:note_id/tags/:tag_name`
