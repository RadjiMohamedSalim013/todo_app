"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addTodo } from "@/geteways/todo";

export default function CreateTaskPage() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);  // Ajout de la tâche
      router.push("/task"); // Redirection vers la page des tâches
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10  py-30 px-10 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-900">Ajouter une tâche</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nom de la tâche"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-emerald-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <button
          type="submit"
          className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 transition"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}
