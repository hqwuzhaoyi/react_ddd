import { useCallback, useContext, useMemo, useState } from "react";
import getServiceToken from "../../Tools/getServiceToken";
import { TodoService } from "../useTodoListService";

// 然后，我们再来说，怎么去修改删除操作，因为这些操作是主数据的分形，添加操作与主数据关系不大（注意，永远把修改，删除这两个和添加分开看，因为添加要操作的对象和修改删除是不同的）

// 同样添加删除组件只有视图

// 这里有个比较争议的地方，就是服务里面，该不该出现组件，或者动态组件

// 换句话：

// 动态组件是视图，还是逻辑？

// 这个问题在 Angular 中也被拿来讨论，争议还挺大的，我个人觉得这部分还是写在组件里比较好，因为写在服务里，服务就不能用 ts，得换成 tsx 了……


// 聚焦逻辑 —— 只暴露当前已选中项给子组件，当前模块只修改这部分逻辑
export const TableHandlerService = getServiceToken(useTableHandlerService);

export default function useTableHandlerService() {
  const [title, setTitle] = useState("");
  const todoService = useContext(TodoService);
  const currentItem = useMemo(
    () =>
      todoService.todoList.find((el) => el.title === title) || {
        title: "",
        description: "",
      },
    [title, todoService]
  );
  const setCurrentItemWithDescription = useCallback(
    (description: string) => {
      todoService.setTodoList((res) => {
        return res.map((el) => {
          if (el.title === title) {
            return { ...el, description };
          }
          return el;
        });
      });
    },
    [todoService, title]
  );
  const deleteCurrentItem = useCallback(() => {
    todoService.setTodoList((res) => res.filter((el) => el.title !== title));
  }, [title, todoService]);
  return {
    title,
    setTitle,
    currentItem,
    setCurrentItemWithDescription,
    deleteCurrentItem,
  };
}
