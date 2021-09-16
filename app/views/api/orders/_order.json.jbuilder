json.extract! order, :id, :user_id, :created_at
json.order_items do
  json.array! order.order_items do |order_item|
    json.partial! 'api/items/order_item', order_item: order_item
  end
end
