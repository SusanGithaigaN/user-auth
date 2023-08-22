class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :tel_no
      t.string :email
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
