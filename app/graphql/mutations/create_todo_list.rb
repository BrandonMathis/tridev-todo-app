module Mutations
  class CreateTodoList < BaseMutation
    argument :title, String, required: true

    field :todo_list, Types::TodoListType, null: false

    def resolve(title:)
      todo_list = TodoList.create!(title: title)

      { todo_list: todo_list }
    end
  end
end
