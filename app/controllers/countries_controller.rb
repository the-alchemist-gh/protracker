class CountriesController < ApplicationController
  skip_before_action :authorize, only: [:index, :show, :getPeriod]

    def index
        render json: Country.all
    end

    def show
      eachCountry = Country.find_by(id: params[:id])
        render json: eachCountry
    end

    def getPeriod
      eachCountry = Country.find_by(id: params[:id])
        render json: eachCountry.governance_years
    end

    def create
        country = Country.create!(country_params)
        render json: country, status: :created
    end

    def destroy
      country = Country.find(params[:id])
      country.destroy
      head :no_content
    end
    # def show
    #     render json: @current_user
    # end

  private

  def country_params
    params.permit(:name, :flag_image_url)
  end
end
