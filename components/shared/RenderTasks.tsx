import React from "react";
import { AlertDialogDemo } from "@/components/shared/Alert";

interface TaskProps {
  task: String;
  date: String;
  index: number;
  deleting: number | null;
  deleteHandler: (index: number) => void;
}

const RenderTasks: React.FC<TaskProps> = ({
  task,
  index,
  deleting,
  date,
  deleteHandler,
}) => {
  return (
    <div
      key={index}
      className={`shadow-md overflow-hidden px-8 pt-8 pb-5  gap-6 bg-zinc-300  border-neutral-500  dark:text-white dark:bg-slate-800 rounded-2xl flex  justify-between flex-col  w-1/3 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  ${
        index === deleting ? "animate-fade-out" : "animate-fade-in"
      }`}
    >
      <h2>{task}</h2>
      <div className="flex justify-between items-center">
        <p className="text-green-600 text-sm">{date}</p>
        <AlertDialogDemo onContinue={() => deleteHandler(index)} />
      </div>
    </div>
  );
};

export default RenderTasks;
