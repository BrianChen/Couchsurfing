class Api::BookingsController < ApplicationController

  def index
    @bookings = Booking.where(["guest_id = ?", current_user.id])
    @guests = Booking.where(["listing_id = ?", current_user.listing.id])
  end

  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:guest_id, :listing_id, :start_date, :end_date, :guests)
  end

end
