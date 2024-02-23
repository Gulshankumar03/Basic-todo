import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface TaskFormProps {
  task: string;
  inputRef: React.RefObject<HTMLInputElement>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (event: React.FormEvent) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  task,
  inputRef,
  handleChange,
  handleClick,
}) => {
  return (
    <div className="flex flex-col justify-center h-56">
      <form onSubmit={handleClick} className="w-full flex justify-center">
        <div className="flex py-14 w-full max-w-lg space-x-3">
          <Input
            ref={inputRef}
            type="text"
            placeholder="Add task"
            value={task}
            onChange={handleChange}
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
