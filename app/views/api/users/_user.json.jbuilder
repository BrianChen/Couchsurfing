json.extract! user, :name, :email
# json.user do
#   json.id user.id
#   json.name user.name
#   json.email user.email
# end

# NOT included user id,
json.listing do
  json.id user.listing.id
  json.address user.listing.address
  json.city user.listing.city
  json.longitude user.listing.longitude
  json.description user.listing.description
  json.max_guests user.listing.max_guests
  json.accepting_guests user.listing.accepting_guests
  json.start_date user.listing.start_date
  json.end_date user.listing.end_date
end
