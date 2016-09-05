Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :albums do
      resources :photo_sets do
        resources :photos
      end
    end
  end

  root "static_pages#root"

end
