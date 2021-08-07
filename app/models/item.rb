class Item < ApplicationRecord
  validates :snack_id, :quantity, presence: true

  belongs_to :snack

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User,
  optional: true

  belongs_to :order,
  foreign_key: :order_id,
  class_name: :Order,
  optional: true
end
