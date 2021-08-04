class Snack < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :description, :price, presence: true

  has_one_attached :photo
end
