import React, { useState, useEffect } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { MdOutlineDone, MdAdd, MdOutlineClose } from "react-icons/md";

const TodoForm = ({ onAdd, editItem, onUpdate, onCancel }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editItem) setText(editItem.text);
    else setText("");
  }, [editItem]);

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    if (editItem) onUpdate({ ...editItem, text: text.trim() });
    else onAdd({ id: Date.now(), text: text.trim(), done: false });
    setText("");
  };

  return (
    <form onSubmit={submit} className="flex gap-2">
      <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Tambah todo..." />
      <Button type="submit" className="bg-green-600 text-white rounded-4xl">
        {editItem ? <MdOutlineDone /> : <MdAdd />}
      </Button>
      {editItem && (
        <Button type="button" className="bg-red-500 text-white" onClick={onCancel}>
          <MdOutlineClose />
        </Button>
      )}
    </form>
  );
};

export default TodoForm;
