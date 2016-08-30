class ApplicationController < ActionController::Base
  helper_method :current_user
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout(user)
    user.reset_session_token!
    session[:session_token] = nil
  end

  def current_user
    User.find_by_session_token(session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def ensure_signed_in
    redirect_to new_session_url unless signed_in?
  end

end
