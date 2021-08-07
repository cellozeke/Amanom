class Item < ApplicationRecord
  validates :snack_id, :quantity, presence: true

  belongs_to :snack

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :order,
  foreign_key: :order_id,
  class_name: :Order
end
