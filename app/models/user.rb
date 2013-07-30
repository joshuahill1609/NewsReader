class User < ActiveRecord::Base
  attr_accessible :username, :password, :password_confirmation, :session_token

  has_many :feeds

  has_secure_password
end
