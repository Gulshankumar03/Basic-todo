"use client";
import { todoType } from "@/types/todoTypes";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";
import { useState } from "react";
import { motion } from "framer-motion";

const Todo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);
  return (
    <motion.div
      className=" flex justify-between flex-col 2xl:w-1/4 xl:w-1/3 pt-8 pb-5 px-8 mx-8 lg:mx-0 shadow-xl border-r-1 border-b-1 border-opacity-25 overflow-hidden bg-zinc-400 border-neutral-500 dark:text-white rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {!editTodo && <h2>{todo.title}</h2>}

      <div className="flex pt-4 justify-center gap-5">
        <EditTodo todo={todo} editTodo={editTodo} setEditTodo={setEditTodo} />
        {!editTodo && <DeleteTodo todo={todo} />}
      </div>
    </motion.div>
  );
};

export default Todo;
