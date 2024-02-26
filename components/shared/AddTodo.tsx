"use client";
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Form from "./Form";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { create } from "@/app/actions/todoActions";
import { Plus } from "lucide-react";
import { toast } from "sonner";

const AddTodo = () => {
  // const [shouldScroll, setShouldScroll] = useState(false);

  const [currentTask, setCurrentTask] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const FocusInputField = useCallback(() => {
    const inputElement = inputRef.current;
    if (inputElement) {
      const top =
        inputElement.getBoundingClientRect().top + window.scrollY - 200;
      window.scrollTo({ top, behavior: "smooth" });
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, []);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(e.target.value);
  }, []);

  const handleAddTodo = () => {
    // setShouldScroll(true);
    setTimeout(() => {
      {currentTask.trim()? toast.success("Task Added Successfully"):toast.warning("Task cannot be empty!")}
    }, 300);
    setCurrentTask("");
  };

  // useEffect(() => {
  //   setTimeout(()=>{
  //     if (shouldScroll) {
  //       window.scrollTo({
  //         top: document.body.scrollHeight,
  //         behavior: "auto",
  //       });
  //       setShouldScroll(false);
  //     }
  //   },500)
  // }, [shouldScroll]);

  return (
    <>
      <Form action={create} onSubmit={handleAddTodo} className="md:w-1/3">
        <div className="flex space-x-3">
          <Input
            onChange={handleChange}
            ref={inputRef}
            name="input"
            type="text"
            autoComplete="off"
            className="h-12 border-neutral-200  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 "
            placeholder="Add Task"
          />
          <Button type="submit" variant={currentTask.trim() ? "default" : "disabled"}>
            Add
          </Button>
        </div>
      </Form>

      {/* Floating Add Task button to focus input field */}
      <div
        className="z-20"
        style={{ position: "fixed", bottom: "15px", right: "15px" }}
      >
        <button
          type="button"
          onClick={FocusInputField}
          className="bg-orange-600 rounded-full md:size-16 size-14 flex items-center justify-center "
        >
          <Plus size={36} />
        </button>
      </div>
    </>
  );
};

export default AddTodo;
