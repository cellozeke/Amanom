class Api::OrdersController < ApplicationController
  def show
    @order = Order.find(params[:id])
    render :show
  end

  def create
    @order = Order.new(order_params)
    if @order.save
      render :show
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  def update
    @order = Order.find(params[:id])
    if @order.update(order_params)
      render :show
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  def order_params
    params.require(:order).permit(:user_id, :completed)
  end
end
