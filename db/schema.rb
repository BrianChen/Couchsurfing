# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161111190726) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer  "guest_id",   null: false
    t.integer  "listing_id", null: false
    t.date     "start_date", null: false
    t.date     "end_date",   null: false
    t.integer  "guests",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "listings", force: :cascade do |t|
    t.string   "address"
    t.string   "city"
    t.float    "longitude"
    t.float    "latitude"
    t.string   "description"
    t.integer  "user_id",                          null: false
    t.integer  "max_guests"
    t.boolean  "accepting_guests", default: false, null: false
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.date     "end_date"
    t.date     "start_date"
    t.index ["end_date"], name: "index_listings_on_end_date", using: :btree
    t.index ["latitude"], name: "index_listings_on_latitude", using: :btree
    t.index ["longitude"], name: "index_listings_on_longitude", using: :btree
    t.index ["start_date"], name: "index_listings_on_start_date", using: :btree
    t.index ["user_id"], name: "index_listings_on_user_id", unique: true, using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "listing_id", null: false
    t.integer  "rating"
    t.string   "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name",            null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.date     "birthdate"
    t.string   "gender"
    t.string   "interest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

end
