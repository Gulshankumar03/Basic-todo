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
      className={`shadow-sm overflow-hidden px-8 pt-8 pb-5 border-2  gap-7 rounded-2xl flex  justify-between flex-col  w-1/3 ${
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
