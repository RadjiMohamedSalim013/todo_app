"use client";

import { useState, useEffect } from "react";
import { ITodo } from "@/interfaces/todo";
import { addTodo, deleteTodo, getTodos, toggleTodo } from "@/geteways/todo";
import TodoItem from "@/components/todoItem";
import DeleteModal from "@/components/DeleteModal";

export default function TodoList() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  const handleAddTodo = (title: string) => {
    const newTodo = addTodo(title);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleToggleTodo = (id: number) => {
    toggleTodo(id);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed
      }))
    );
  };

  const handleAskDelete = (id: number) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    if (selectedId !== null) {
      deleteTodo(selectedId);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== selectedId));
      setShowModal(false);
      setSelectedId(null);
    }
  };

  return (
    <div className="w-full bg-gray-50 p-4">
      {todos.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">Aucune tâche pour le moment</p>
          <p className="text-gray-400 mt-2">Commencez par ajouter une nouvelle tâche</p>
        </div>
      ) : (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700 rounded-lg overflow-hidden shadow-sm bg-gray-200">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggleTodo}
              onAskDelete={handleAskDelete}
            />
          ))}
        </ul>
      )}

      <DeleteModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
