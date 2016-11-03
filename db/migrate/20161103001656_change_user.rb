class ChangeUser < ActiveRecord::Migration[5.0]
  def change
    change_column_null(:users, :birthdate, true)
    change_column_null(:users, :interest, true)
    change_column_null(:users, :gender, true)
  end
end
