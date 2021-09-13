class Api::OrdersController < ApplicationController
  def show
    @order = Order.find(params[:id])
    render :show
  end

  def show_user_orders
    @orders = Order.find(params[:id])
    render :show_user_orders
  end

  def create
    @order = Order.create(user_id: current_user.id)
    items = Item.find_by_sql ['SELECT * FROM items WHERE user_id = ?', current_user.id]
    items.each do |item|
      item.user_id = nil
      item.order_id = @order.id
      item.save
    end
    render :show
    # if @order.save
    #   render :show
    # else
    #   render json: @order.errors.full_messages, status: 422
    # end
  end

  # def order_params
  #   params.require(:order).permit(:user_id)
  # end
end
