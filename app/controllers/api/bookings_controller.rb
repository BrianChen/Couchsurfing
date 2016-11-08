class Api::BookingsController < ApplicationController

  def index
    # @travelPlan = Booking.where(["guest_id = ?", current_user.id])
    @bookings = Booking.where(["guest_id = ?", current_user.id])
    @guests = Booking.where(["listing_id = ?", current_user.listing.id])
  end
end
