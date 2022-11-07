class CampaignPromisesController < ApplicationController
    def index
        render json: CampaignPromise.all
    end

    def create
        promise = CampaignPromise.create!(promise_params)
        render json: promise, status: :created
    end

    def show
        eachPromise = CampaignPromise.find_by(id: params[:id])
        render json: eachPromise
    end

    def update
      promise = CampaignPromise.find_by(id: params[:id])
      promise.update(promise_params)
      render json: promise
    end

    def destroy
      promise = CampaignPromise.find(params[:id])
      promise.destroy
      head :no_content
    end

  private


  def promise_params
    params.permit(:title, :topic, :description, :promise_date, :promise_venue, :promise_completion, :votes, :status, :country_id, :governance_year_id, :user_id)
  end
end
