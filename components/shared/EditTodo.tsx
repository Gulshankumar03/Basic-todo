"use client";
import { todoType } from "@/types/todoTypes";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "../ui/button";
import { edit } from "@/app/actions/todoActions";
import { Input } from "../ui/input";
import { toast } from "sonner";

interface EditTodoProps {
  todo: todoType;
  editTodo: boolean;
  setEditTodo: (editTodo: boolean) => void;
}

const EditTodo = ({ todo, editTodo, setEditTodo }: EditTodoProps) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [currentTask, setCurrentTask] = useState("");

  const handleEdit = () => {
    setEditTodo(!editTodo);
  };

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(e.target.value);
  }, []);

  const handleSubmit = () => {
    setEditTodo(false);
    setTimeout(() => {
      {currentTask.trim()? toast.success("Task Updated"):toast.warning("Task cannot be empty!")}
    }, 300);
    setCurrentTask("");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        formRef.current instanceof HTMLElement &&
        !formRef.current.contains(event.target as Node)
      ) {
        setEditTodo(false);
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formRef]);

  return (
    <div>
      {editTodo ? (
        <form ref={formRef} action={edit} onSubmit={handleSubmit}>
          <h1 className="font-semibold">Edit Todo</h1>
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex  w-full">
            <Input
              onChange={handleChange}
              autoComplete="off"
              className="my-2"
              type="text"
              name="newTitle"
              placeholder="Edit Todo..."
            />

            <Button
              variant={currentTask.trim() ? "default" : "disabled"}
              className="h-10 ml-2 my-2"
              type="submit"
            >
              Save
            </Button>
          </div>
        </form>
      ) : (
        <Button
          onClick={handleEdit}
          variant={"secondary"}
          size={"sm"}
          className="text-xs min-w-20  dark:bg-zinc-800  dark:hover:bg-zinc-800/80"
        >
          Edit
        </Button>
      )}
    </div>
  );
};

export default EditTodo;
