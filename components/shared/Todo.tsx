import { todoType } from "@/types/todoTypes";
import { Button } from "../ui/Button";
import { deleteTodo } from "@/app/actions/todoActions";

const Todo = ({ todo }: { todo: todoType }) => {
  return (
    <div className="shadow-xl border-r-2 border-b-2 border-opacity-25 overflow-hidden pt-10 pb-5 px-8 mx-8 bg-zinc-400 border-neutral-500 dark:text-white rounded-3xl flex justify-between flex-col 2xl:w-1/4 xl:w-1/3 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
      <h2>{todo.title}</h2>
      <div className="flex pt-3 justify-between">
        <Button
          variant={"secondary"}
          size={"sm"}
          className="text-xs dark:bg-zinc-800 dark:hover:bg-zinc-800/80"
        >
          Done
        </Button>

        <Button
          variant={"secondary"}
          size={"sm"}
          className="text-xs  dark:bg-zinc-800  dark:hover:bg-zinc-800/80"
        >
          Update
        </Button>

        <form action={deleteTodo}>
          <input type="hidden" name="id" value={todo.id} />
          <Button
            variant={"destructive"}
            size={"sm"}
            className="text-xs"
            type="submit"
          >
            Delete
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Todo;
