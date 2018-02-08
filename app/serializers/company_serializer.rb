class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :recruits

  def recruits
    object.recruitments.map{ |recruitment| RecruitmentSerializer.new(recruitment).attributes }
  end
end
