Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  resources :customers
  devise_for :users
  root 'home#index'
end
