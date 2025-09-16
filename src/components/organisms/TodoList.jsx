import React from "react";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";
import { AiOutlineDelete } from "react-icons/ai";
import { LuPencilLine } from "react-icons/lu";

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  return (
    <ul className="space-y-4">
      {todos.map((t) => (
        <li key={t.id} className="flex items-center justify-between p-3 border rounded-md bg-white dark:bg-gray-800">
          <div className="flex items-center gap-3">
            <Checkbox checked={t.done} onChange={() => onToggle(t.id)} />
            <div className={`${t.done ? "line-through text-gray-400" : ""}`}>{t.text}</div>
          </div>
          <div className="flex gap-3 ">
            <Button onClick={() => onEdit(t)} className=" text-white">
              <LuPencilLine />
            </Button>
            <Button onClick={() => onDelete(t.id)} className=" text-red-500">
              <AiOutlineDelete />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
