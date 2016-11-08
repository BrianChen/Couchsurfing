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
