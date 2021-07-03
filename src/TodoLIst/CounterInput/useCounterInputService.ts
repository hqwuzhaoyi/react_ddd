import { Form, message } from "antd";
import { useCallback, useContext } from "react";
import { TodoService } from "../useTodoListService";

export default function useCounterInputService() {
  const [form] = Form.useForm();
  const todoService = useContext(TodoService);
  // 依赖约束
  const handleSubmit = useCallback(
    (formData) => {
      const exist = todoService.todoList.find(
        (el) => el.title === formData.title
      );
      if (exist) {
        message.warning("当前标题已经存在");
        return;
      }
      todoService.setTodoList((res) => [...res, formData]);
      form.resetFields();
    },
    [todoService, form]
  );
  return {
    form,
    handleSubmit,
  };
}
