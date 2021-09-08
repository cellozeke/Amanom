class Api::SnacksController < ApplicationController
  def show
    @snack = Snack.find(params[:id])
    render :show
  end

  def show_search_results
    results = {}
    params[:words].each do |word|
      (Snack.find_by_sql ['SELECT * FROM snacks WHERE name ILIKE ?', "%#{word}%"]).each do |snack|
        results[snack] ? results[snack] += 2 : results[snack] = 2
      end
      (Snack.find_by_sql ['SELECT * FROM snacks WHERE description ILIKE ?', "%#{word}%"]).each do |snack|
        results[snack] ? results[snack] += 1 : results[snack] = 1
      end
    end
    @results = Hash[results.sort_by { |_, v| -v }]
    render :show_search_results
  end

  def show_popular_snacks
    @snacks = Snack.find_by_sql ['SELECT snacks.* FROM items JOIN snacks ON snacks.id = items.snack_id GROUP BY snacks.id ORDER BY COUNT(*) DESC LIMIT 4']
    render :show_search_results
  end

  def show_random_snacks

  end
end
