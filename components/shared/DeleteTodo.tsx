"use client";
import { todoType } from "@/types/todoTypes";
import React from "react";
import { Button } from "../ui/button";
import Form from "./Form";
import { deleteTodo } from "@/app/actions/todoActions";
import { AlertButton } from "./AlertButton";
import { toast } from "sonner";

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  const showDeleteToast = () => {
    setTimeout(() => {
      toast.error("Task Deleted!");
    }, 300);
  };

  return (
    <Form action={deleteTodo} onSubmit={showDeleteToast}>
      <input type="hidden" name="inputId" value={todo.id} />
      <Button
        variant={"destructive"}
        size={"sm"}
        className="text-xs min-w-20 "
        type="submit"
      >
        Delete
      </Button>
      {/* <AlertButton  /> */}
    </Form>
  );
};

export default DeleteTodo;
