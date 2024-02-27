import AddTodo from "@/components/shared/AddTodo";
import Todo from "@/components/shared/Todo";
import { todoType } from "@/types/todoTypes";
import { prisma } from "@/utils/prisma";
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

      {/* <div  style={{ position: "fixed", bottom: "15px", left: "15px" }} className="opacity-40 rounded-full h-[40rem] w-[40rem] bg-orange-400 -mx-[15%] -my-[15%] -z-20"></div>
      <div  style={{ position: "fixed", top: "15px", right: "15px" }} className="opacity-40 rounded-full h-[40rem] w-[40rem] bg-orange-400 -mx-[15%] -my-[15%] -z-20"></div> */}
      {/* To display add task form */}
      <div className="flex flex-col justify-center items-center  h-56">
        <AddTodo />
      </div>

      {/* To render tasks */}
      <div className="w-4/5 mx-auto flex flex-col flex-wrap justify-center xl:flex-row xl:w-full gap-10">
        {data.length ? (
          data.map((item: todoType, id:number) => <Todo todo={item} key={id} />)
        ) : (
          <h1 className="text-red-400 font-semibold text-xl">
            No tasks available!
          </h1>
        )}
      </div>
    </>
  );
};

export default page;
