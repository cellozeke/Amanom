json.extract! snack, :id, :name, :description, :price, :rating
json.numReviews snack.reviews.count
json.photoUrl url_for(snack.photo)
