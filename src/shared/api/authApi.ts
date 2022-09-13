import fetcher from "@/shared/api/fetcher";
import { METHOD, URL } from "@/shared/constants/index";

const authApi = {
  getKakaoToken(code: string) {
    const data: any = {
      grant_type: "authorization_code",
      client_id: import.meta.env.VITE_REST_API_KEY,
      redirect_uri: import.meta.env.VITE_REDIRECT_URI,
      code: code,
    };
    const queryString: any = Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURI(data[key]))
      .join("&");
    return fetcher(METHOD.POST, URL.KAKAO_TOKEN, queryString, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
  },
  sendKakaoToken(token: string) {
    return fetcher(METHOD.GET, "auth/token", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default authApi;