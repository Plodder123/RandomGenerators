Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # root 'password_generator#index'
  get '/name_generator', to: 'name_generator#index'
  get '/color_generator', to: 'color_generator#index'
  get '/password_generator', to: 'password_generator#index'
  root 'home#index'


end
