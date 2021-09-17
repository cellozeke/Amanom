json.partial! 'api/snacks/snack', snack: @snack
# json.extract! @snack, :reviews
json.reviews do
  json.array! @snack.reviews do |review|
    json.partial! 'api/reviews/review', review: review
  end
end
