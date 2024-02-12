class CreateTodoItems < ActiveRecord::Migration[7.1]
  def change
    create_table :todo_items do |t|
      t.string :text
      t.boolean :done

      t.timestamps
    end
  end
end
