import React, { useEffect, useState } from "react";
import MainLayout from "../templates/MainLayout";
import Navbar from "../organisms/Navbar";
import TodoForm from "../molecules/TodoForm";
import TodoList from "../organisms/TodoList";
import { useAuth } from "../../hooks/useAuth";

const STORAGE_KEY = "todos_v1";

const TodoPage = () => {
  const { logout, initAuth } = useAuth();
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    initAuth();
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setTodos(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const add = (item) => setTodos((s) => [item, ...s]);
  const toggle = (id) => setTodos((s) => s.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const del = (id) => setTodos((s) => s.filter((t) => t.id !== id));
  const edit = (item) => setEditItem(item);
  const update = (item) => {
    setTodos((s) => s.map((t) => (t.id === item.id ? item : t)));
    setEditItem(null);
  };
  const cancelEdit = () => setEditItem(null);

  return (
    <MainLayout>
      <Navbar onLogout={logout} />

      <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-md shadow">
        <h2 className="text-xl font-semibold mb-3">My Todos</h2>
        <TodoForm onAdd={add} editItem={editItem} onUpdate={update} onCancel={cancelEdit} />
        <div className="mt-4">
          <TodoList todos={todos} onToggle={toggle} onDelete={del} onEdit={edit} />
        </div>
      </div>
    </MainLayout>
  );
};

export default TodoPage;
