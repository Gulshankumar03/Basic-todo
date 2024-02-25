"use client";
import React, { useCallback, useRef } from "react";
import Form from "./Form";

import { Button } from "../ui/Button";
import { Input } from "../ui/input";
import { create } from "@/app/actions/todoActions";
import { Plus } from "lucide-react";

const AddTodo = () => {
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

  return (
    <>
      <Form action={create} className="md:w-1/3">
        <div className="lg:flex space-x-3">
          <Input
            ref={inputRef}
            name="input"
            type="text"
            autoComplete="off"
            className="h-12 border-neutral-200  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 "
            placeholder="Add Task"
          />
          <Button type="submit">Add</Button>
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
          className="bg-orange-600 rounded-full md:size-16 sm:size-14 flex items-center justify-center "
        >
          <Plus size={36} />
        </button>
      </div>
    </>
  );
};

export default AddTodo;
