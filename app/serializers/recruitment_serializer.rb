class RecruitmentSerializer < ActiveModel::Serializer
  attributes :id, :step, :candidate

  private
  def candidate
    CandidateSerializer.new(object.candidate).attributes
  end
end
