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
class Customer < ApplicationRecord
    validates_presence_of :email, message: 'This field is required'
    validates_uniqueness_of :email, message: 'This email has already been taken'

    validates_presence_of :city, message: 'This field is required'
    validates_presence_of :company, message: 'This field is required'
    validates_presence_of :name, message: 'This field is required'
end
