module Types
  class QueryType < Types::BaseObject
    field :todo_lists, [Types::TodoListType], null: false, description: "Returns a list of todos"
    field :todo_list , Types::TodoListType, null: true do
      description "Find a todo by ID"
      argument :id, ID, required: true
    end

    def todo_list(id:)
      TodoList.find(id)
    end

    def todo_lists
      TodoList.all
    end
  end
end
