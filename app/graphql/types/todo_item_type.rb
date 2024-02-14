# frozen_string_literal: true

module Types
  class TodoItemType < Types::BaseObject
    field :id, ID, null: false
    field :text, String, null: false
    field :done, Boolean, null: false
  end
end
