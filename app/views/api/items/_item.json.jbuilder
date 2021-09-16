json.extract! item, :id, :snack_id, :user_id, :order_id, :quantity, :snack
json.updated_at item.updated_at.strftime('%s').to_i
json.photoUrl url_for(item.snack.photo)
