class Booking < ApplicationRecord
  validates :guest_id, :listing_id, :guests, :start_date, :end_date, presence: true

  belongs_to :listing

  has_one :user,
    through: :listing,
    source: :user


end
