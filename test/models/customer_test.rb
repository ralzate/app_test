# == Schema Information
#
# Table name: customers
#
#  id         :integer          not null, primary key
#  city       :string
#  company    :string
#  email      :string
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "test_helper"

class CustomerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
