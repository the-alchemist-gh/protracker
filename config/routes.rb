Rails.application.routes.draw do
  # namespace do
    resources :users, only: [:index,:show, :create]
    get '/hello', to: 'application#hello_world'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # route to test your configuration
 

  get '*path', 
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
