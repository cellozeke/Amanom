class Order < ApplicationRecord
  validates :user_id, presence: true
  # validates :completed, inclusion: { in: [true, false] }

  belongs_to :user

  has_many :order_items,
  foreign_key: :order_id,
  class_name: :Item
end
