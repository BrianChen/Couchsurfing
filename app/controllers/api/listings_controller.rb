class Api::ListingsController < ApplicationController

  belongs_to :user

  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      
    end

  end

  def update

  end

  def show

  end

  private
  def listing_params
    params.require(:listing).permit(:address, :city, :accepting_guest, :host_id)
  end
end
