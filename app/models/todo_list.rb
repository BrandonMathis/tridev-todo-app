class TodoList < ApplicationRecord
  has_many :todo_items, -> { order(created_at: :desc) }, dependent: :destroy
end
