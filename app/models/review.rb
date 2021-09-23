class Review < ApplicationRecord
  validates :user_id, :snack_id, :title, :body, :stars, presence: true
  validates :stars, numericality: { other_than: 0 }
  validates :user, uniqueness: { scope: :snack }

  belongs_to :user
  belongs_to :snack
end
