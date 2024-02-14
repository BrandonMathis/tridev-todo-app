module Types
  class QueryType < Types::BaseObject
    field :todo_lists, [Types::TodoListType], null: false, description: "Returns a list of todos"

    def todo_lists
      TodoList.all
    end
  end
end
