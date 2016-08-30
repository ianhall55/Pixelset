class AddNameAndIndexToUsers < ActiveRecord::Migration
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false

    add_index :users, :username, unique: true
    add_index :users, [:username, :password_digest], unique: true
    add_index :users, [:email, :password_digest], unique: true
    add_index :users, :session_token, unique: true
  end
end
