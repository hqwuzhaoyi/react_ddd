import { useCallback, useContext } from "react";
import { Form, message } from "antd";
import { useRequest } from "ahooks";
import { mockRequestData } from "../../../Tools/mockRequest";
import { AuthService } from "../../useAuthService";
import { useHistory } from "react-router-dom";

// 这就是一个很简单的多实例服务，它有以下几步构成：

// 注入一些你需要的服务，使用限界上下文
// 按照你的需要实现逻辑
// 需要的时候变更上下文数据，比如
// authService.setToken(res.token);
// authService.setUserInfo(res.userInfo);
// 我们可以看到，虽然这个登录模块比较简单，但是麻雀虽小，五脏俱全

// 其中最大的优势就是 —— 功能领域结构边界清晰


// 你所有跟验证有关的代码，只有可能在 Auth 中，所有跟登录相关的代码，也只有可能在 Login 中，所有跟登录表单相关的代码，也只有可能在 LoginForm 中，不可能在其它地方

// 其实前端项目，你只要能这样划分代码，你就能形成非常好的团队协作

// 这才是真正的微前端（想要自动化部署？大家共享一套模板，然后构建的时候，把一人 src 中的代码cp到master相关目录下即可），并且，还可以移动层级，各种替换重构都得心应手，真正是 高内聚，低耦合

// 表单，校验，loading状态，提示，自动跳转，顶层注入

// 全部这些逻辑实现，一共6，70行代码，很舒服


export default function useLoginFormService() {
  // 注入上层服务
  const authService = useContext(AuthService);
  const history = useHistory();
  // 表格
  const [form] = Form.useForm();
  // 请求
  const requestLogin = useRequest(
    (formData) =>
      mockRequestData({
        token: "this is token",
        userInfo: { name: "im og", formData },
      }),
    {
      manual: true,
      debounceInterval: 300,
      onSuccess: (res) => {
        message.success("登录成功");
        authService.setToken(res.token);
        authService.setUserInfo(res.userInfo);
        history.push("/dash/home");
      },
    }
  );
  // 约束依赖，request 是以 data 为变更标识，run 则不会
  const runRequestLogin = requestLogin.run;
  // 发送请求
  const handleSubmit = useCallback(
    (formData) => {
      runRequestLogin(formData);
    },
    [runRequestLogin]
  );
  return {
    form,
    loading: requestLogin.loading,
    handleSubmit,
  };
}
