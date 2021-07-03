import { Alert, Space } from "antd";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DashLayout from "./DashLayout";
import TodoList from "../../TodoLIst";

// 很多人说，不对，我喜欢用 json 风格的路由配置

// 但是朋友，你想过没，路由涉及的逻辑有多少？能够预料到这个项目会有多少逻辑和路由息息相关么？

// 你提取了一个路由 json，然后能？你想要的怎么给它附加功能？

// 那些路由节点需要注入哪些上下文？你能够通过一个 json 去完成这个么？

// 当然，路由视图组件也一样，也是不能有任何逻辑！

export default function DashRoutes() {
  const { path } = useRouteMatch();
  return (
    <DashLayout>
      <Switch>
        <Route path={`${path}/home`}>
          <Space direction='vertical' style={{ width: "100%" }}>
            <Alert message='来，我们演示一下怎么实现 TODO LIst' />
            <TodoList />
          </Space>
        </Route>
        <Route path={`${path}/test`}>
          <Alert message='这是一个测试页面' type='warning' />
        </Route>
      </Switch>
    </DashLayout>
  );
}
