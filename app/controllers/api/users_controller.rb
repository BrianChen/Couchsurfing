class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      @listing = Listing.create({user_id: @user.id})
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :password, :email, :birthdate, :gender, :interest)
  end
end
