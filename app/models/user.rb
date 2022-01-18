class User < ApplicationRecord
    include Devise::JWT::RevocationStrategies::JTIMatcher
  
    devise :database_authenticatable, :jwt_authenticatable, :registerable,
     :recoverable, :rememberable, :validatable, jwt_revocation_strategy: self
  end
  