class Api::ItemsController < ApplicationController
  def show
    @item = Item.find(params[:id])
    render :show
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      render :show
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  def update
    @item = Item.find(params[:id])
    if @item.update(item_params)
      render :show
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    render :show
  end

  def item_params
    params.require(:item).permit(:snack_id, :user_id, :order_id, :quantity)
  end
end
