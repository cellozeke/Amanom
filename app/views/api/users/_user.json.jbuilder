json.extract! user, :id, :username, :email, :orders
json.cartSize user.cart_items.length
