class AddIndexesToReviews < ActiveRecord::Migration[5.2]
  def change
    add_index :reviews, [:user_id, :snack_id], unique: true
  end
end
