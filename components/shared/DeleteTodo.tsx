'use client'
import { todoType } from '@/types/todoTypes'
import React from 'react'
import { Button } from '../ui/Button'
import Form from './Form'
import { deleteTodo } from '@/app/actions/todoActions'

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
          <input type="hidden" name="inputId" value={todo.id} />
          <Button
            variant={"destructive"}
            size={"sm"}
            className="text-xs min-w-20 "
            type="button"
          >
            Delete
          </Button>
        </Form>
  )
}

export default DeleteTodo