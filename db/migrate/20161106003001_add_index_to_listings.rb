class AddIndexToListings < ActiveRecord::Migration[5.0]
  def change
    add_index :listings, :end_date
    add_index :listings, :start_date
    add_index :listings, :longitude
    add_index :listings, :latitude
  end
end
