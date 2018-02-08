Rails.application.routes.draw do
  get 'recruitment_dashboard/index'

  get 'company/:company_id/show', to: 'company#show'
  post 'recruitment/:recruitment_id/edit', to: 'recruitment#update'

  root 'recruitment_dashboard#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
