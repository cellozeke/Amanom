class Api::ReviewsController < ApplicationController
  def show_user_reviews
    @reviews = Review.where('user_id = ?', params[:id])
    render :show_reviews
  end

  def show_snack_reviews
    @reviews = Review.where('snack_id = ?', params[:id])
    render :show_reviews
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      snack = Snack.find(review_params[:snack_id])
      ratings = snack.reviews.map(&:stars)
      snack.rating = (ratings.sum / (ratings.size * 1.0)).round(1)
      snack.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render :show
  end

  def review_params
    params.require(:review).permit(:user_id, :snack_id, :title, :body, :stars)
  end
end
