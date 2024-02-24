import React from "react";
import Form from "../createdUi/Form";

import { Button } from "../ui/Button";
import { Input } from "../ui/input";

const AddTodo = () => {
  return (
    <>
      <Form className="w-full flex justify-center">
        <div className="flex w-1/3 px-12 space-x-3">
          <Input className="h-12 border-neutral-200  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 " placeholder="Add Task"/>
          <Button size={"default"}>Add</Button>
        </div>
      </Form>
    </>
  );
};

export default AddTodo;
