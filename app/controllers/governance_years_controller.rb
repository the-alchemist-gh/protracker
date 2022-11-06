class GovernanceYearsController < ApplicationController
    def index
        render json: GovernanceYear.all
    end

    def create
        period = GovernanceYear.create!(period_params)
        render json: period, status: :created
    end

    def show
        eachYear = GovernanceYear.find_by(id: params[:id])
        render json: eachYear
    end

    def update
      years = GovernanceYear.find_by(id: params[:id])
      years.update(period_params)
      render json: years
    end

  private


  def period_params
    params.permit(:year, :political_party, :president, :country_id, :image_url)
  end
end
