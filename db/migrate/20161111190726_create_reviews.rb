class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :listing_id, null:false
      t.integer :rating
      t.string :comment
      t.timestamps
    end
  end
end
