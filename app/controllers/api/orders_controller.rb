class Api::OrdersController < ApplicationController
  def show
    @order = Order.find(params[:id])
    render :show
  end

  def show_user_orders
    @orders = Order.find_by_sql ['SELECT * FROM orders WHERE user_id = ?', current_user.id]
    render :show_orders
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
  end
end
