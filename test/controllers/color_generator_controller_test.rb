require "test_helper"

class ColorGeneratorControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get color_generator_index_url
    assert_response :success
  end
end
