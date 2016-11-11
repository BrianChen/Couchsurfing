class Review < ApplicationRecord
  validates :listing_id, presence: true

  belongs_to :listing
end
