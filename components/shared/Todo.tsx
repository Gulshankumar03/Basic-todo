import { todoType } from "@/types/todoTypes";
import { Button } from "../ui/Button";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";

const Todo = ({ todo }: { todo: todoType }) => {
  return (
    <div className=" flex justify-between flex-col 2xl:w-1/4 xl:w-1/3 pt-10 pb-5 px-8 mx-8 lg:mx-0 shadow-xl border-r-1 border-b-1 border-opacity-25 overflow-hidden bg-zinc-400 border-neutral-500 dark:text-white rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
      <h2>{todo.title}</h2>

      <div className="flex pt-4 justify-start gap-5">
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
