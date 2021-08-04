class CreateSnacks < ActiveRecord::Migration[5.2]
  def change
    create_table :snacks do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.price :integer, null: false
      t.rating :integer
      t.timestamps
    end
    add_index :snacks, :name, unique: true
    add_index :snacks, :price
    add_index :snacks, :rating
  end
end
