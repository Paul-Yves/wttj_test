require 'test_helper'

class RecruitmentDashboardControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get recruitment_dashboard_index_url
    assert_response :success
  end

end
