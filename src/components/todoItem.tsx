
"use client";

import { ITodoItemProps } from "@/interfaces/todo";

export default function TodoItem({ todo, onToggle, onDelete }: ITodoItemProps) {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <span
        onClick={() => onToggle(todo.id)}
        className={`cursor-pointer ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.title}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        Supprimer
      </button>
    </div>
  );
}

