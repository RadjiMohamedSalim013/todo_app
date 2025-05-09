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
  const [loading, setLoading] = useState(true);  
  useEffect(() => {
    if (id) {
      const todos = getTodos();
      const currentTodo = todos.find((t) => t.id.toString() === id);
      if (currentTodo) {
        setTodo(currentTodo);
        setTitle(currentTodo.title);
      } else {
        setTodo(null);  
      }
    }
    setLoading(false);  
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
    router.push("/task");
  };

  if (loading) {
    return <p className="text-center mt-10">Chargement...</p>; 
  }

  if (!todo) {
    return <p className="text-center mt-10">Tâche introuvable</p>; 
  }

  return (
    <div className="max-w-md mx-auto mt-10 px-6 py-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Modifier la tâche
      </h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
        placeholder="Titre de la tâche"
      />
      <div className="flex justify-between">
        <button
          onClick={handleCancel}
          className="px-4 py-2 rounded-md border border-gray-400 text-gray-600 hover:bg-gray-100 transition"
        >
          Annuler
        </button>
        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
}
