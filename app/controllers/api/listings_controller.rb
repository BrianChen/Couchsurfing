class Api::ListingsController < ApplicationController

  def update
    @listing = Listing.find(params[:id])
    if @listing.update(listing_params)
      @user = @listing.user
      render :show
    else
      render json: @listings.errors.full_messages, status: 422
    end
  end

  def index
    start_date = params[:filters][:dates][:start_date]
    end_date = params[:filters][:dates][:end_date]
    bounds = params[:filters][:bounds]

    if (start_date == "" || end_date == "") && bounds
      @listings = Listing.in_bounds(bounds)
    else
      @listings = Listing.in_bounds_dates(bounds, params[:filters][:dates])
    end

    if @listings == nil
      @listings = []
    end
    render :index
  end

  def show
    @listing = Listing.find(params[:id])
  end

  private
  def listing_params
    params.require(:listing).permit(:id, :address, :city, :longitude, :latitude, :description, :max_guests, :start_date, :end_date, :accepting_guests, :user_id)
  end

  def filter_params
    params.require(:filters).permit(:dates, :bounds)
  end
end
