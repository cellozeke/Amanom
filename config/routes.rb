Rails.application.routes.draw do
  root to: 'root#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resources :snacks, only: :show
    resources :orders, only: %i[show create]
    resources :items, only: %i[show create update destroy]
    resources :reviews, only: %i[show create update destroy]
    get '/cart_items/:id', to: 'items#show_cart_items'
    get '/order_items/:id', to: 'items#show_order_items'
    get '/search_results', to: 'snacks#show_search_results'
    get '/user_reviews/:id', to: 'reviews#show_user_reviews'
    get '/snack_reviews/:id', to: 'reviews#show_snack_reviews'
    # get '/popular_snacks', to: 'snacks#show_popular_snacks'
    get '/user_orders', to: 'orders#show_user_orders'
    get '/rec_snacks', to: 'snacks#show_recs'
    resource :session, only: %i[create destroy]
  end
end
