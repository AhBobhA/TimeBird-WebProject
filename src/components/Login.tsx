import { useEffect, useState } from "react";
import image from "../assets/login-bg.png";
import axios from "axios";

export default function Login(props: any) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const [rememberMe, setRememberMe] = useState(false);

  function handleCredentials(e: any) {
    setCredentials({
      email: e.target.id == "email" ? e.target.value : credentials.email,
      password:
        e.target.id == "password" ? e.target.value : credentials.password
    });
  }

  function handleOnSubmit(e: any) {
    e.preventDefault();
    axios
      .post("", credentials)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    /* console.log(credentials, rememberMe); */
  });

  return (
    <div className="relative w-screen h-screen bottom-0">
      <div className="absolute w-screen h-screen bg-[#2B4EA2]">
        <img
          src={image}
          className="absolute w-[849px] h-[800px] -left-[19px] top-[140px] mix-blend-screen"
          alt=""
        />
      </div>

      <div className="absolute w-[1109px] h-screen bg-[#FFFFFF] right-[0px]"></div>
      <div
        className="absolute min-w-[670px] h-[56px] 
        max-lg:left-[50%] max-lg:translate-x-[-50%] lg:right-[220px] top-[292px] 
        font-[700] text-[48px] leading-[56px] text-[#2B4EA2]"
      >
        Welcome to Universiry A Portal
      </div>
      <div
        className="absolute min-w-[670px] h-[28px] 
        max-lg:left-[50%] max-lg:translate-x-[-50%] lg:right-[220px] top-[372px] 
        font-[300] text-[24px] leading-[28px] text-[#000000]"
      >
        Enter your credentials to continue
      </div>
      <form action="" method="POST" onSubmit={e => handleOnSubmit(e)}>
        <input
          type="text"
          className="absolute w-[670px] h-[80px] 
          max-lg:left-[50%] max-lg:translate-x-[-50%] lg:right-[220px] top-[460px] 
          font-[400] text-[32px] leading-[38px] 
          px-[30px]
          border-[3px] border-[#ACACAC] rounded-[5px] focus:outline-0 focus:border-[#2B4EA2]"
          placeholder="Email"
          onChange={e => handleCredentials(e)}
          id="email"
          value={credentials.email}
        />

        <input
          type="password"
          className="absolute w-[670px] h-[80px] 
          max-lg:left-[50%] max-lg:translate-x-[-50%] lg:right-[220px] top-[600px] 
          font-[400] text-[32px] leading-[38px] 
          px-[30px]
          border-[3px] border-[#ACACAC] rounded-[5px] focus:outline-0 focus:border-[#2B4EA2]"
          placeholder="Password"
          id="password"
          value={credentials.password}
          onChange={e => handleCredentials(e)}
        />
        <div
          className="absolute min-w-[670px] h-[33px]
          max-lg:left-[50%] max-lg:translate-x-[-50%] lg:right-[220px] top-[719px]
        "
        >
          <input
            type="checkbox"
            className="absolute w-[33px] h-[33px]
            border-[2px] border-[#000000] rounded-[5px]"
            onChange={() => setRememberMe(!rememberMe)}
            id="rememberMe"
            checked={rememberMe}
          />
          <label
            className="absolute min-w-[157px] h-[28px]
            left-[54px]
            font-[400] text-[24px] leading-[28px]"
          >
            Remember me
          </label>

          <p
            className="absolute min-w-[244px] h-[28px]
            right-0
            font-[400] text-[24px] leading-[28px] underline"
          >
            Forgot your password?
          </p>
        </div>

        {/* <input
          type="checkbox"
          className="absolute w-[33px] h-[33px] 
            max-lg:left-[19%] max-lg:translate-x-[-50%] lg:right-[857px] top-[719px]
            border-[2px] border-[#000000] rounded-[5px]"
          onChange={() => setRememberMe(!rememberMe)}
          id="rememberMe"
          checked={rememberMe}
        />
        <label
          className="absolute min-w-[157px] h-[28px] 
            max-lg:left-[30%] max-lg:translate-x-[-50%] lg:right-[679px] top-[722px]
            font-[400] text-[24px] leading-[28px]"
        >
          Remember me
        </label>

        <p
          className="absolute min-w-[244px] h-[28px] right-[220px] top-[722px]
            font-[400] text-[24px] leading-[28px] underline"
        >
          Forgot your password?
        </p> */}

        <input
          type="submit"
          className="absolute w-[670px] h-[82px] 
          max-lg:left-[50%] max-lg:translate-x-[-50%] lg:right-[220px] top-[789px]
          bg-[#FF9D35] rounded-[5px]
          text-white font-[400] text-[40px] leading-[47px]"
          value={"Login"}
        />
      </form>
    </div>
  );
}
