"use client";

import { AlertDialogDemo } from "@/components/shared/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { ChangeEvent, useState } from "react";
import { FormEvent } from "react";
import { toast } from "sonner";

const page = () => {
  const [Task, setTask] = useState("");
  const [UserTask, setUserTask] = useState<any[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  function handleClick(event: FormEvent) {
    if (Task.length) {
      setUserTask([...UserTask, Task]);
      toast.success("Task added successfully");
    } else {
      toast.warning("Nothing to add !");
    }
    event.preventDefault();
    setTask("");
  }

  const deleteHandler = (i: number) => {
    const newTasks = [...UserTask]; // Create a copy of the UserTask array
    newTasks.splice(i, 1); // Remove the item at index i
    setUserTask(newTasks); // Update the state with the new array
    toast.error("Task Deleted!");
  };

  let renderTask: any = <h1 className="text-red-400 font-semibold text-xl">No tasks available!</h1>;
  if (UserTask.length > 0) {
    renderTask = UserTask.map((t, i) => {
      return (
        <div className="shadow-md p-2 border-2 rounded-md flex flex-col gap-5 items-center justify-between w-1/2 ">
          <h2 key={i} className="">
            {t}
          </h2>
          <AlertDialogDemo onContinue={() => deleteHandler(i)} />
        </div>
      );
    });
  }
  return (
    <>
      <div className="flex flex-col justify-center">
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
      <div className="flex flex-col w-full justify-center items-center pt-10 pb-5 gap-5">
        {renderTask}
      </div>
    </>
  );
};

export default page;
