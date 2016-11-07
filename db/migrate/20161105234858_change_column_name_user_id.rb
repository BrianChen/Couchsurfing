class ChangeColumnNameUserId < ActiveRecord::Migration[5.0]
  rename_column :listings, :host_id, :user_id
end
