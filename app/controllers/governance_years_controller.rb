class GovernanceYearsController < ApplicationController
  skip_before_action :authorize, only: [:create, :index, :show]

    def index
        render json: GovernanceYear.all
    end

    def create
        period = GovernanceYear.create!(period_params)
        render json: period, status: :created
    end

    def show
        eachYear = GovernanceYear.find_by(id: params[:id])
        # counts = Hash.new(0)
        # broken = eachYear.campaign_promises
        # broken2 = broken.count { |element| element.status == "Broken" }

        # broken2 = broken.tally
        render json: eachYear 
    end

    def update
      years = GovernanceYear.find_by(id: params[:id])
      years.update(period_params)
      render json: years
    end

  private

  # def addBroken
  #   broken = @show.campaign_promises

  # end

  def period_params
    params.permit(:year, :political_party, :president, :country_id, :image_url)
  end
end
