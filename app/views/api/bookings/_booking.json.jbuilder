json.id booking.id
json.listing_id booking.listing_id
json.guest_id booking.guest_id
json.start_date booking.start_date
json.end_date booking.end_date

json.user do
  json.id booking.user.id
  json.name booking.user.name
  json.email booking.user.email
  json.city booking.listing.city
end

json.listing do
  json.id booking.listing.id
  json.address booking.listing.address
  json.city booking.listing.city
  json.max_guests booking.listing.max_guests
  json.picture booking.listing.picture
  json.start_date booking.listing.start_date
  json.end_date booking.listing.end_date
end
