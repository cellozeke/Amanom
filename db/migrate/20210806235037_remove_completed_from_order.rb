class RemoveCompletedFromOrder < ActiveRecord::Migration[5.2]
  def change
    remove_column :orders, :completed
  end
end
