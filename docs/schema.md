## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## listings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
address         | string    | not null
description     | string    | not null, indexed, unique
host_id         | integer   | not null, indexed


## Bookings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
isAvailable     | boolean   | not null
check_in        | date      | not null, indexed, unique
check_out       | date      | not null
listing_id      | integer   | not null, indexed, unique
booker_id       | integer   | not null

## Reviews
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | boolean   | not null
rating          | string    | not null, indexed, unique
comment         | string    | not null
listing_id      | string    | not null, indexed, unique
booker_id       | string    | not null
