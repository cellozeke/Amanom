json.extract! order_item, :id, :quantity, :snack
json.photo_url url_for(order_item.snack.photo)
