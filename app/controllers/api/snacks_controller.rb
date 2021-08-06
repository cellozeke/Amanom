class Api::SnacksController < ApplicationController
  def show
    @snack = Snack.find(params[:id])
    render :show
  end
end
