Rails.application.routes.draw do
  root to: 'root#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resources :snacks, only: :show
    resources :orders, only: %i[show create]
    resources :items, only: %i[show create update destroy]
    get '/cart_items/:id', to: 'items#show_cart_items'
    get '/order_items/:id', to: 'items#show_order_items'
    get '/search_results', to: 'snacks#show_search_results'
    resource :session, only: %i[create destroy]
  end
end
