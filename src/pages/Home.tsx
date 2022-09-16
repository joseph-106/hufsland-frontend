import { useRecoilState } from "recoil";

import { USER } from "@/shared/constants/index";
import { userState } from "@/shared/state/user";

const Home = () => {
  const [user, setUser] = useRecoilState(userState);

  const logout = () => {
    localStorage.removeItem(USER);
    setUser({ ...user, isLoggedIn: false });
  };

  return <button onClick={() => logout()}>Logout</button>;
};

export default Home;
