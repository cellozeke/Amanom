json.extract! item, :id, :snack_id, :user_id, :order_id, :quantity, :snack
json.partial! '/api/snacks/snack_photo', snack: item.snack
