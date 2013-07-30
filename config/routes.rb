NewReader::Application.routes.draw do
  resources :feeds, only: [:index, :create,:show] do
    resources :entries, only: [:index]
  end

  resources :users
  resources :sessions, only: [:new, :create, :destroy]

  root to: "feeds#index"
end
