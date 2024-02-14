module Types
  class MutationType < Types::BaseObject
    field :create_todo_list, mutation: Mutations::CreateTodoList
  end
end
