module ApplicationHelper

  def log_in(username, password)
    user = User.find_by_username(username)
    if (user.authenticate(password))
      user.session_token = SecureRandom.urlsafe_base64(6)
      user.save!
      session[:session_token] = user.session_token
    end
  end

  def current_user
    @current_user || User.find_by_session_token(session[:session_token])
  end

end