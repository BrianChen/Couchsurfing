json.id booking.id
json.listing_id booking.listing_id
json.guest_id booking.guest_id
json.start_date booking.start_date
json.end_date booking.end_date

json.user do
  json.id booking.guest.id
  json.name booking.guest.name
  json.email booking.guest.email
  json.city booking.listing.city
end
