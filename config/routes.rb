Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:show, :index, :create, :update]
    resources :bookings, only: [:create, :index]
    resources :reviews, only: [:create]
  end
end
