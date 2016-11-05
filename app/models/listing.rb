class Listing < ApplicationRecord
  validates :address, :city, :host_id, presence: true
end
