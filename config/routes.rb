Rails.application.routes.draw do
  get 'recruitment_dashboard/index'

  root 'recruitment_dashboard#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
