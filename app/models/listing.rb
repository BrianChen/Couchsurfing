class Listing < ApplicationRecord
  validates :user_id, presence: true

  belongs_to :user
  has_many :reviews
  has_many :bookings

  def self.in_bounds_dates(bounds, dates)
    from = dates["start_date"]
    to = dates["end_date"]
    listings = Listing.where("latitude < ? AND longitude < ? AND latitude > ? AND longitude > ? AND ((start_date <= ? AND end_date > ?) AND (end_date >= ? AND start_date < ?))",
    bounds["northEast"]["lat"],
    bounds["northEast"]["lng"],
    bounds["southWest"]["lat"],
    bounds["southWest"]["lng"],
    from, from, to, to)
    listings
  end

  def self.in_bounds(bounds)
    Listing.where("latitude < ? AND longitude < ? AND latitude > ? AND longitude > ?",
    bounds["northEast"]["lat"],
    bounds["northEast"]["lng"],
    bounds["southWest"]["lat"],
    bounds["southWest"]["lng"])
  end
end
