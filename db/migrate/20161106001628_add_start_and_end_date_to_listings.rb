class AddStartAndEndDateToListings < ActiveRecord::Migration[5.0]
  add_column(:listings, :end_date, :date);
end
