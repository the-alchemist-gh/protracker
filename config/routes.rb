Rails.application.routes.draw do
  resources :reviews, only: [:index, :show, :create]
  resources :comments, only: [:index, :show, :create]
  resources :campaign_promises
  resources :governance_years, only: [:index, :show, :create]
  resources :countries, only: [:index, :show, :create]
  # namespace do
    resources :users, only: [:index,:show, :create]
    get '/hello', to: 'application#hello_world'
    post "/login", to: "sessions#create"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # route to test your configuration
 

  get '*path', 
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
