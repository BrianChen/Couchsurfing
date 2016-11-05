class CreateListings < ActiveRecord::Migration[5.0]
  def change
    create_table :listings do |t|
      t.string :address, null: false
      t.string :city, null: false
      t.float :longitude
      t.float :latitude
      t.string :description
      t.integer :host_id, null: false
      t.integer :max_guests
      t.boolean :accepting_guests, null: false, default: false
      t.timestamps
    end

    add_index :listings, :host_id, unique: true
  end
end
