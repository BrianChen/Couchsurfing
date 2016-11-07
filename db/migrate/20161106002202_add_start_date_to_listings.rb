class AddStartDateToListings < ActiveRecord::Migration[5.0]
  def change
    add_column :listings, :start_date, :date
  end
end
