class ChangeListings < ActiveRecord::Migration[5.0]
  def change
    change_column_null(:listings, :address, true)
    change_column_null(:listings, :city, true)
  end
end
