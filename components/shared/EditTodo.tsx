"use client";
import { todoType } from "@/types/todoTypes";
import React, { useState } from "react";
import { Button } from "../ui/Button";
import { edit } from "@/app/actions/todoActions";
import { Input } from "../ui/input";

const EditTodo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    console.log(`button cicked`);
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };

  return (
    <div>
      <Button
        onClick={handleEdit}
        variant={"secondary"}
        size={"sm"}
        className="text-xs min-w-20  dark:bg-zinc-800  dark:hover:bg-zinc-800/80"
      >
        Edit
      </Button>

      {editTodo ? (
        <form action={edit} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex justify-center">
            <Input
              className="my-2"
              type="text"
              name="newTitle"
              placeholder="Edit Todo..."
            />

            <Button className="h-10 ml-2 my-2" type="submit">
              Save
            </Button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default EditTodo;
