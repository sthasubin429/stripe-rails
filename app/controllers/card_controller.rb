class CardController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery with: :null_session

  def index; end

  def card_form_submit
    p params[:credit_card_data]

    render :card_submit
  end
end
