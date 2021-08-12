class ChangeSnackRatingColumnType < ActiveRecord::Migration[5.2]
  def change
    change_column :snacks, :rating, :decimal
  end
end
