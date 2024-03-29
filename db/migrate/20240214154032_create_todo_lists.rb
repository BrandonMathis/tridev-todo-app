class CreateTodoLists < ActiveRecord::Migration[7.1]
  def change
    create_table :todo_lists do |t|
      t.string :title

      t.timestamps
    end

    change_table :todo_items do |t|
      t.references :todo_list, null: false, foreign_key: true
    end
  end
end
