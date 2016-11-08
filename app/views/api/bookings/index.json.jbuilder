json.bookings do
  json.array! @bookings, partial: "booking", as: :booking
end
json.guests do
  json.array! @guests, partial: "booking", as: :booking
end
# json.travelPlan do
#   json.id travelPlan.id
#   json.guest_id travelPlan.guest_id
#   json.listing_id travelPlan.listing_id
#   json.start_date travelPlan.start_date
#   json.end_date travelPlan.end_date
#   json.guests travelPlan.guests
# end

# json.user do
#   json.id travelPlan.host.id
#   json.email travelPlan.host.email
#   json.gender travelPlan.host.gender
#   json.interest travelPlan.host.interest
#   json.birthdate travelPlan.host.birthdate
# end
