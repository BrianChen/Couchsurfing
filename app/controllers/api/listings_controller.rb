class Api::ListingsController < ApplicationController

  # def create
  #   @listing = Listing.new(listing_params)
  #   if @listing.save
  #     render :show
  #   end
  #
  # end

  def update
    @listing = Listing.find(params[:id])
    if @listing.update(listing_params)
      @user = @listing.user
      render :show
    else
      render json: @listings.errors.full_messages, status: 422
    end
  end

  def show

  end

  private
  def listing_params
    params.require(:listing).permit(:id, :address, :city, :longitude, :latitude, :description, :max_guests, :start_date, :end_date, :accepting_guests, :user_id)
  end
end
