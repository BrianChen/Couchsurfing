class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_meessages, status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:listing_id, :rating, :comment)
  end
end
