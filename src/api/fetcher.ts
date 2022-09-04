import axios from "axios";
import { METHOD, URL, MESSAGE } from "@/constants/index";

axios.defaults.baseURL = URL.BASE;

const fetcher = async (
  method: typeof METHOD[keyof typeof METHOD],
  url: string,
  ...rest: { [key: string]: any }[]
) => {
  try {
    const res = await axios[method](url, ...rest);
    return res.data;
  } catch (error: any) {
    alert(`${MESSAGE.ALERT_API} (${error.message})`);
  }
};

export default fetcher;
