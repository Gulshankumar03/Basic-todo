"use client";

import { AlertDialogDemo } from "@/components/shared/Alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { ChangeEvent, useRef, useState, useEffect } from "react";
import { FormEvent } from "react";
import { toast } from "sonner";

const page = () => {
  const [Task, setTask] = useState("");
  const [UserTask, setUserTask] = useState<String[]>([]);
  const [deleting, setDeleting] = useState<number | null>(null);

  const endOfTasksRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const FocusInputField = () => {
    const inputElement = inputRef.current;
    if (inputElement) {
      const top =
        inputElement.getBoundingClientRect().top + window.scrollY - 200;
      window.scrollTo({ top, behavior: "smooth" });
      {
        /* input field will get focused after 0.5ms so that there will be enough time for the screen
           to scroll to the input field with a smooth animation */
      }
      setTimeout(() => {
        inputRef.current?.focus();
      }, 500);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  function handleClick(event: FormEvent) {
    event.preventDefault();
    if (Task.length) {
      setUserTask([...UserTask, Task]);
      toast.success("Task added successfully");
      setTask("");
      setTimeout(() => {
        endOfTasksRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      toast.warning("Nothing to add !");
    }
  }

  const deleteHandler = (i: number) => {
    setDeleting(i);
    setTimeout(() => {
      const newTasks = [...UserTask]; // Create a copy of the UserTask array
      newTasks.splice(i, 1); // Remove the item at index i
      setUserTask(newTasks); // Update the state with the new array
      setDeleting(null);
      toast.error("Task Deleted!");
    }, 500); // delay deletion for 0.5s to allow animation to complete
  };

  

  let renderTask: JSX.Element[] = [
    <h1 className="text-red-400 font-semibold text-xl">No tasks available!</h1>,
  ];

  if (UserTask.length > 0) {
    renderTask = UserTask.map((item, i) => {
      return (
        <div
          key={i}
          className={`shadow-sm overflow-hidden px-10 pt-10 pb-5 border-2  gap-5 rounded-2xl flex  justify-between flex-col  w-1/3 ${
            i === deleting ? "animate-fade-out" : "animate-fade-in"
          }`}
        >
          <h2 key={i} className="">
            {item}
          </h2>
          <div className="flex justify-between items-center">
            <p className="text-green-200 text-xs">Date & Time</p>
            <AlertDialogDemo onContinue={() => deleteHandler(i)} />
          </div>
        </div>
      );
    });
    renderTask.push(
      <div ref={endOfTasksRef} key="endOfTasksRef" className="h-4" />
    );
  }

  useEffect(() => {
    document.body.style.backgroundImage = '")';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center h-56">
        <form onSubmit={handleClick} className="w-full flex justify-center">
          <div className="flex py-14 w-full max-w-lg space-x-3">
            <Input
              ref={inputRef}
              type="text"
              placeholder="Add task"
              value={Task}
              onChange={handleChange}
            />
            <Button type="submit" variant={Task ? "default" : "disabled"}>
              Add
            </Button>
          </div>
        </form>
      </div>

      {/* Floating Add Task button to focus input field */}
      <div style={{ position: "fixed", bottom: "25px", right: "25px" }}>
        <Button type="button" className=" shadow-xl" onClick={FocusInputField}>
          New Task
        </Button>
      </div>

      {/*To render tasks */}
      <div className="flex flex-wrap w-full justify-center  gap-5">
        {renderTask}
      </div>
    </>
  );
};

export default page;
