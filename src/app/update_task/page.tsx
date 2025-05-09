"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getTodos } from "@/geteways/todo";
import { ITodo } from "@/interfaces/todo";

export default function UpdateTaskPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState<ITodo | null>(null);

  useEffect(() => {
    const todos = getTodos();
    const current = todos.find((t) => t.id.toString() === id);
    if (current) {
      setTodo(current);
      setTitle(current.title);
    }
  }, [id]);

  const handleUpdate = () => {
    if (!todo) return;
    const todos = getTodos().map((t) =>
      t.id === todo.id ? { ...t, title } : t
    );
    localStorage.setItem("todos", JSON.stringify(todos));
    router.push("/task");
  };

  const handleCancel = () => {
    router.back(); 
  };

  if (!todo)
    return (
      <p className="text-center mt-10 text-gray-600">Tâche introuvable</p>
    );

  return (
    <div className="max-w-md mx-auto mt-10 px-4 py-20 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4 text-gray-900">Modifier la tâche</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border border-emerald-500 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        placeholder="Nom de la tâche"
      />
      <div className="flex gap-4">
                <button
          onClick={handleCancel}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          Annuler
        </button>
        <button
          onClick={handleUpdate}
          className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 transition"
        >
          Enregistrer
        </button>

      </div>
    </div>
  );
}
