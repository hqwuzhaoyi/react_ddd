import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../Auth/Login";
import DashRoutes from "./DashRoutes";

// 来看看路由，首先，react-router-dom 是个非常优秀的路由库

// 为何如此说？

// 我发现社区很多人都在批评 react-router-dom 纯粹使用标签元素来进行路由组织的方案

// 其实这才是更好的方案，更能配合 SOA/DDD 的方案

// 因为在 React 中，注入点是组件，你才能将路由相关逻辑，自由提取，路由/页面本身，也能形成功能模块

export default function Router() {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to={{ pathname: "/dash/home" }} />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/dash'>
        <DashRoutes />
      </Route>
    </Switch>
  );
}
