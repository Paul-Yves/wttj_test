class RecruitmentController < ApplicationController
  def update
    recruitment = Recruitment.find(params[:recruitment_id])
    step = params.require(:step)
    return render nothing: true, status: 404 unless recruitment
    recruitment.update(step: step)
    ActionCable.server.broadcast('dashboard_channel', id: recruitment.id, message: 'step_changed')
  end
end