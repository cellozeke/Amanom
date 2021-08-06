class Order < ApplicationRecord
  validates :user_id, presence: true
  validates :completed, inclusion: { in: [true, false] }

  belongs_to :user
end
