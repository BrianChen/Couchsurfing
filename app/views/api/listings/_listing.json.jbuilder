json.extract! listing, :id, :address, :city, :description, :latitude, :longitude, :max_guests, :accepting_guests, :end_date, :start_date, :reviews, :picture

json.user do
  json.id listing.user.id
  json.name listing.user.name
  json.email listing.user.email
end
