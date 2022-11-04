class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :user_type
      t.string :institution
      t.string :password_digest
      t.boolean :approved

      t.timestamps
    end
  end
end
