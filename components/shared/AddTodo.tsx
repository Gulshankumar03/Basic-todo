import React from "react";
import Form from "./Form";

import { Button } from "../ui/Button";
import { Input } from "../ui/input";
import { create } from "@/app/actions/todoActions";

const AddTodo = () => {
  return (
    <>
      <Form action={create} className="md:w-1/3" >
        <div className="lg:flex space-x-3">
          <Input
            name="input"
            type="text"
            autoComplete="off"
            className="h-12 border-neutral-200  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 "
            placeholder="Add Task"
          />
          <Button type="submit">
            Add
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AddTodo;
