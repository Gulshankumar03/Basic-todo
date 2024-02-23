import React from "react";
import { AlertDialogDemo } from "@/components/shared/Alert";

interface TaskProps {
  task: String;
  index: number;
  deleting: number | null;
  deleteHandler: (index: number) => void;
}

const RenderTasks: React.FC<TaskProps> = ({
  task,
  index,
  deleting,
  deleteHandler,
}) => {
  return (
    <div
      key={index}
      className={`shadow-sm overflow-hidden px-10 pt-10 pb-5 border-2  gap-5 rounded-2xl flex  justify-between flex-col  w-1/3 ${
        index === deleting ? "animate-fade-out" : "animate-fade-in"
      }`}
    >
      <h2>{task}</h2>
      <div className="flex justify-between items-center">
        <p className="text-green-200 text-xs">Date & Time</p>
        <AlertDialogDemo onContinue={() => deleteHandler(index)} />
      </div>
    </div>
  );
};

export default RenderTasks;
