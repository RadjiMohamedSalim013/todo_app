"use client";

import { ITodoItemProps } from "@/interfaces/todo";
import { Edit, Trash } from "lucide-react"; // Import des icônes
import Link from "next/link";

export default function TodoItem({ todo, onToggle, onAskDelete }: ITodoItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-gray-100 hover:bg-gray-200">
      <div className="flex items-center space-x-4">
        {/* Checkbox pour marquer comme terminé ou non */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)} 
          className="cursor-pointer text-blue-500"
        />
        <span
          onClick={() => onToggle(todo.id)}
          className={`cursor-pointer text-lg ${todo.completed ? "line-through text-gray-500" : "text-gray-900"}`}
        >
          {todo.title}
        </span>
      </div>

      <div className="flex space-x-4">
        {/* Bouton Modifier avec icône */}
        <Link href={`/update_task?id=${todo.id}`} className="flex items-center text-blue-500 hover:text-blue-700">
          <Edit className="mr-1" size={18} />
          Modifier
        </Link>

        {/* Bouton Supprimer avec icône */}
        <button
          onClick={() => onAskDelete(todo.id)}  
          className="flex items-center text-red-500 hover:text-red-700"
        >
          <Trash className="mr-1" size={18} />
          Supprimer
        </button>
      </div>
    </div>
  );
}
