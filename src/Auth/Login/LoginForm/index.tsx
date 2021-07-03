import React from "react";
import { Button, Form, Input } from "antd";
import useLoginFormService from "./useLoginFormService";

// 观察可以得知，这个表单组件，除了依赖注入

// 没有，且不应该有任何逻辑！
// 他就是只反映视图的小元素，你的逻辑，状态，请一股脑放到 service 里

// 关于 Service 的命名，我认为是个好习惯，因为如果命名不加 Service，很容易和实体出现冲突

export default function LoginForm() {
  const loginFormService = useLoginFormService();
  return (
    <Form
      layout='vertical'
      form={loginFormService.form}
      onFinish={loginFormService.handleSubmit}
    >
      <Form.Item
        name='name'
        label='姓名'
        rules={[{ required: true, message: "此为必填项" }]}
      >
        <Input placeholder='请输入姓名' />
      </Form.Item>
      <Form.Item name='passsword' label='密码'>
        <Input placeholder='请输入密码' type='password' />
      </Form.Item>
      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          block
          loading={loginFormService.loading}
        >
          现在登录
        </Button>
      </Form.Item>
    </Form>
  );
}
