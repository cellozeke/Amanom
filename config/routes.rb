Rails.application.routes.draw do
  root to: 'root#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resources :snacks, only: :show
    resources :orders, only: %i[show create update]
    resource :session, only: %i[create destroy]
  end
end
