class RecruitmentController < ApplicationController
  def update
    recruitment = Recruitment.find(params[:recruitment_id])
    step = params.require(:step)
    recruitment.update(step: step)
  end
end