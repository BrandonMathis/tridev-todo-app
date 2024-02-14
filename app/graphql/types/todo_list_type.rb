# frozen_string_literal: true

module Types
  class TodoListType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false

    field :todo_items, [Types::TodoItemType], null: true
  end
end
