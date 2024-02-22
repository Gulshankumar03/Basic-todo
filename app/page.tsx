"use client";

import { AlertDialogDemo } from "@/components/shared/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { ChangeEvent, useRef, useState, useEffect } from "react";
import { FormEvent } from "react";
import { toast } from "sonner";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const page = () => {
  const [Task, setTask] = useState("");
  const [UserTask, setUserTask] = useState<any[]>([]);
  const [adding, setAdding] = useState<number | null>(null);
  const [deleting, setDeleting] = useState<number | null>(null);

  const endOfTasksRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  function handleClick(event: FormEvent) {
    event.preventDefault();
    if (Task.length) {
      setUserTask([...UserTask, Task]);
      setAdding(UserTask.length); // Set adding to the index of the new task
      setTimeout(() => setAdding(null), 500); // Reset adding after 0.5s
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

  let renderTask: any = (
    <h1 className="text-red-400 font-semibold text-xl">No tasks available!</h1>
  );

  if (UserTask.length > 0) {
    renderTask = UserTask.map((t, i) => {
      return (
        <div
          key={i}
          className={`shadow-sm overflow-hidden px-10 pt-10 pb-5 border-2  gap-5 rounded-2xl flex flex-col justify-between items-stretch w-1/3 ${
            i === deleting ? "animate-fade-out" : "animate-fade-in"
          }`}
        >
          <h2 key={i} className="">
            {t}
          </h2>
          <div className="self-end">
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
      
      <div className="flex flex-wrap w-full justify-center  gap-5">
        {renderTask}
      </div>
    </>
  );
};

export default page;
