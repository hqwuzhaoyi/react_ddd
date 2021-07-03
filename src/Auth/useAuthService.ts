import { useLocalStorageState } from "ahooks";
import { message } from "antd";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import getServiceToken from "../Tools/getServiceToken";

// 这个服务将被注册至全局
export const AuthService = getServiceToken(useAuthService);

/**
 * 权限验证服务
 *
 * @export
 * @returns
 */
export default function useAuthService() {
  const history = useHistory();
  const location = useLocation();
  const [token, setToken] = useLocalStorageState("token", "");
  const [userInfo, setUserInfo] = useLocalStorageState("userInfo", {
    name: "",
  });
  // 依赖约束
  const redirect = history.push;
  useEffect(() => {
    // 无 token 在 dash 页面内
    // 直接跳转进 login
    if (!token && location.pathname.indexOf("dash") >= 0) {
      message.warn("登录失效，请重新登录");
      redirect("/login");
    }
  }, [token, location, redirect]);
  return { token, setToken, userInfo, setUserInfo };
}
