Rails.application.routes.draw do
  root to: 'root#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: %i[create destroy]
  end
end
