"use client";

import TodoList from "@/components/todoList";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function TaskPage() {
  return (
    <div className="max-w-3xl mx-auto mt-8 sm:mt-12 px-4 sm:px-6">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 "> Liste des tâches</h1>
        <Link href="/create_task">
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]">
            <Plus size={18} className="stroke-[2.5]" />
            <span className="hidden sm:inline">Ajouter</span>
            <span className="sm:hidden">+</span>
          </button>
        </Link>
      </div>

      <div className="space-y-4">
        <TodoList />
      </div>
    </div>
  );
}