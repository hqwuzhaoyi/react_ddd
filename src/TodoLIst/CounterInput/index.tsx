import { Button, Card, Form, Input } from "antd";
import React from "react";
import useCounterInputService from "./useCounterInputService";

export default function CounterInput() {
  const counterInputService = useCounterInputService();
  return (
    <Card>
      <Form
        form={counterInputService.form}
        onFinish={counterInputService.handleSubmit}
      >
        <Form.Item
          name='title'
          label='标题'
          rules={[{ required: true, message: "标题为必填项" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name='description' label='详情'>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            添加
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
