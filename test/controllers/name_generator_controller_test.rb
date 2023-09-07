require "test_helper"

class NameGeneratorControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get name_generator_index_url
    assert_response :success
  end
end
