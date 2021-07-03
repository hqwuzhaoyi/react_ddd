import React from "react";
import useAuthService, { AuthService } from "./Auth/useAuthService";
import Router from "./Router";

// 这是 Auth 的权限验证服务，有点不同的是，这个服务将被注册至全局

// 那是肯定的，毕竟登录验证属于应用的基础嘛

// 但是注意，由于依赖路由上下文，因此需要注入到 react-router-dom provider 的下面，依赖提升嘛，正常操作

// Login 是 Auth 的组成部分之一，Signup 之类的模块未来也会增加，所以全部放在 Auth 下面

// Auth 不必有导出组件，因为领域模块是资源的集合，（用过 Angular 的同学都知道，module 不一定要声明 declaration）

function App() {
  const authService = useAuthService();
  return (
    <AuthService.Provider value={authService}>
      <Router />
    </AuthService.Provider>
  );
}

export default App;
