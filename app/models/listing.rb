class Listing < ApplicationRecord
  validates :user_id, presence: true

  belongs_to :user

  has_many :bookings

  def self.in_bounds_dates(bounds, dates)

    from = dates["start_date"]
    to = dates["end_date"]
    Listing.where("latitude < ? AND longitude < ? AND latitude > ? AND longitude > ? AND ((start_date > ? AND start_date < ?) OR (end_date > ? AND end_date < ?) OR (start_date <= ? AND end_date >= ?))",
    bounds["northEast"]["lat"],
    bounds["northEast"]["lng"],
    bounds["southWest"]["lat"],
    bounds["southWest"]["lng"],
    from, to, from, to, from, from)

    # Listing.where("latitude < ? AND longitude < ? AND latitude > ? AND longitude > ?",
    # bounds["northEast"]["lat"],
    # bounds["northEast"]["lng"],
    # bounds["southWest"]["lat"],
    # bounds["southWest"]["lng"])
  end

  def self.in_bounds(bounds)
    Listing.where("latitude < ? AND longitude < ? AND latitude > ? AND longitude > ?",
    bounds["northEast"]["lat"],
    bounds["northEast"]["lng"],
    bounds["southWest"]["lat"],
    bounds["southWest"]["lng"])
  end

end
