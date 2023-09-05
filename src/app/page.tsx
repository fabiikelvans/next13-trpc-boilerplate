"use client";
import { serverClient } from './_trpc/server-client'
import TodoList from './components/todo-list'
import {trpc} from "@/app/_trpc/client";

export default function Home() {
    const todos = trpc.todo.getTodos.useQuery();
  return (
    <main className='max-w-3xl mx-auto mt-5'>
      <TodoList initialTodos={todos}/>
    </main>
  )
}
