module Types
  class MutationType < Types::BaseObject
    field :create_todo_list, mutation: Mutations::CreateTodoList
    field :create_todo_item, mutation: Mutations::CreateTodoItem
  end
end
