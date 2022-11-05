class CountriesController < ApplicationController
    def index
        render json: Country.all
    end

    def create
        country = Country.create!(country_params)
        render json: country, status: :created
    end

    # def show
    #     render json: @current_user
    # end

  private

  def country_params
    params.permit(:name, :flag_image_url)
  end
end
