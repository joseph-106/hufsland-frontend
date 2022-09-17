import { ChangeEvent, FormEvent, useState } from "react";

import { infoApi } from "@/shared/api";
import { USER } from "@/shared/constants";

const Info = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onChangeId = (e: ChangeEvent<HTMLInputElement>) => setId(e.target.value);
  const onChangePw = (e: ChangeEvent<HTMLInputElement>) => setPw(e.target.value);
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const token: string = JSON.parse(localStorage.getItem(USER) as string).token;
      const res = await infoApi.linkUserInfo(id, pw, token);
      console.log(res);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input required placeholder='학번' type='text' onChange={onChangeId} />
      <br />
      <input required placeholder='비밀번호' type='password' onChange={onChangePw} />
      <br />
      <button type='submit'>전송</button>
    </form>
  );
};

export default Info;
