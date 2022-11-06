Rails.application.routes.draw do
  resources :reviews, only: [:index, :show, :create]
  resources :comments, only: [:index, :show, :create]
  resources :campaign_promises
  resources :governance_years, only: [:index, :show, :create, :update]
  resources :countries, only: [:index, :show, :create, :destroy]
  # namespace do
    resources :users, only: [:index,:show, :create]
    # get '/hello', to: 'application#hello_world'
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # route to test your configuration
 

  get '*path', 
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
