import { useLocalStorageState, useMount } from "ahooks";
import { useEffect, useState } from "react";
import getServiceToken from "../Tools/getServiceToken";

export const TodoService = getServiceToken(useTodoService);

export interface TodoData {
  title: string;
  description: string;
}

// 我们需要个 todoList，还需要存储 todoList 是么？

// 神说，要有光，你要本地存储，那就直接直译：

// 其实只用 一个 useLocalStorageState 就够了，但是，ts 下，这个hooks强制有个 undefined，神烦，可能它考虑到只要是 localStorage 都可能被清空吧，也算是帮人排了个大 bug，哈哈哈

export default function useTodoService() {
  // 存储的编辑列表

  const [todoList, setTodoList] = useState<TodoData[]>([]);
  const [stored, setStored] = useLocalStorageState<TodoData[]>("todoList", []);
  useMount(() => {
    if (stored) {
      setTodoList(stored);
    }
  });
  useEffect(() => {
    if (todoList !== stored) {
      setStored(todoList);
    }
  }, [todoList, setStored, stored]);
  return {
    todoList,
    setTodoList,
  };
}
