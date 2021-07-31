class Api::UsersController < ApplicationController
  # def show
  #   @user = User.find(params[:id])
  #   render :show
  # end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
