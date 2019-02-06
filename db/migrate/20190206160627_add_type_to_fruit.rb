class AddTypeToFruit < ActiveRecord::Migration[5.1]
  def change
  	add_column :fruits, :fruit_type, :string, :default => ""
  end
end
