module Mutations
  class CreateTodoItem < BaseMutation
    argument :text, String, required: true
    argument :todo_list_id, ID, required: true

    field :todo_list, Types::TodoListType, null: false

    def resolve(text:, todo_list_id:)
      todo_list = TodoList.find(todo_list_id)

      todo_list.todo_items.create!(
        text: text,
        done: false
      )

      { todo_list: todo_list }
    end
  end
end
