import React, { useRef } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface TaskFormProps {
  task: string;
  inputRef: React.RefObject<HTMLInputElement>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  task,
  inputRef,
  handleChange,
  handleSubmit,
}) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div className="flex flex-col justify-center h-56">
      <form
        onSubmit={handleSubmit}
        className="w-full flex justify-center"
      >
        <div className="flex py-14 w-full max-w-lg space-x-4">
          <Input
            name="input"
            ref={inputRef}
            type="text"
            placeholder="Add task"
            value={task}
            onChange={handleChange}
            className=" border-neutral-200  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 "
          />
          <Button type="submit" variant={task ? "default" : "disabled"}>
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
