class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.integer :snack_id, null: false
      t.integer :user_id
      t.integer :order_id
      t.integer :quantity, null: false
      t.timestamps
    end
    add_index :items, :snack_id
    add_index :items, :user_id
    add_index :items, :order_id
  end
end
