module Mutations
  class CreateTodoList < BaseMutation
    argument :title, String, required: true

    field :todo_list, Types::TodoListType, null: false

    def resolve(title:)
      TodoList.create!(title: title)
    end
  end
end
