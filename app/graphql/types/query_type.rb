module Types
  class QueryType < Types::BaseObject
    field :todos, [Types::TodoItemType], null: false, description: "Returns a list of todos"

    def todos
      TodoItem.all
    end
  end
end
