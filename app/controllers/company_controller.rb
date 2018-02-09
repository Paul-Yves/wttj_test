class CompanyController < ApplicationController

  # display all the candidates for a specific company
  def show
    company = Company.find_by(name: 'Night\'s Watch') # this is stub for demo, should use company id instead
    return render nothing: true, status: 404 unless company
    render json: company
  end
end