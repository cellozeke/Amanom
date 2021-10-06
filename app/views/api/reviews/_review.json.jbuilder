json.extract! review, :id, :user_id, :snack_id, :title, :body, :stars, :updated_at, :created_at
json.snackName review.snack.name
json.photoUrl url_for(review.snack.photo)
json.username review.user.username
