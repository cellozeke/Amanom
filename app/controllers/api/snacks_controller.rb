class Api::SnacksController < ApplicationController
  def show
    @snack = Snack.find(params[:id])
    render :show
  end

  def show_search_results
    results = []
    params[:words].each do |word|
      results.concat((Snack.find_by_sql ['SELECT * FROM snacks WHERE name ILIKE ?', "% #{word}%"]).to_a)
      results.concat((Snack.find_by_sql ['SELECT * FROM snacks WHERE description ILIKE ?', "% #{word}%"]).to_a)
    end
    @snacks = results.uniq
    render :show_search_results
  end
end
