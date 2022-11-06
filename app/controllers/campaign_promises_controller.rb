class CampaignPromisesController < ApplicationController
    def index
        render json: CampaignPromise.all
    end

    def create
        promise = @current.campaign_promises.create!(period_params)
        render json: period, status: :created
    end

    def show
        eachPromise = CampaignPromise.find_by(id: params[:id])
        render json: eachPromise
    end

    def update
      promise = CampaignPromise.find_by(id: params[:id])
      promise.update(promise)
      render json: promise
    end

  private


  def promise_params
    params.permit(:year, :political_party, :president, :country_id, :image_url)
  end
end
