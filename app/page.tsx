import AddTodo from "@/components/shared/AddTodo";
import Todo from "@/components/shared/Todo";
import { Button } from "@/components/ui/Button";
import { prisma } from "@/utils/prisma";
import { Plus } from "lucide-react";
import React from "react";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

const page = async () => {
  const data = await getData();
  return (
    <>
      {/* To display add task form */}
      <div className="flex flex-col justify-center items-center  h-56">
        <AddTodo />
      </div>

      {/* To render tasks */}
      <div className="w-4/5 mx-auto flex flex-col flex-wrap justify-center xl:flex-row xl:w-full gap-10">
        {data.length ? (
          data.map((item, id) => <Todo todo={item} key={id} />)
        ) : (
          <h1 className="text-red-400 font-semibold text-xl">
            No tasks available!
          </h1>
        )}
      </div>

      {/* Floating Add Task button to focus input field */}
      <div
        className="z-20"
        style={{ position: "fixed", bottom: "15px", right: "15px" }}
      >
        <button className="bg-orange-600 rounded-full md:size-16 sm:size-14 flex items-center justify-center ">
        <Plus size={36} />
        </button>
      </div>
    </>
  );
};

export default page;
