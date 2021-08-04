class CreateSnacks < ActiveRecord::Migration[5.2]
  def change
    create_table :snacks do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.integer :price, null: false
      t.integer :rating
      t.timestamps
    end
    add_index :snacks, :name, unique: true
    add_index :snacks, :price
    add_index :snacks, :rating
  end
end
