import image from "../assets/login-bg.png";

export default function Login(props: any) {
  return (
    <div className="relative w-full h-screen -top-[73px]">
      <div className="absolute w-[670px] h-[56px] left-[1031px] top-[292px] font-[700] text-[48px] leading-[56px] text-[#2B4EA2]">
        Welcome to Universiry A Portal
      </div>
      <div className="absolute w-[670px] h-[28px] left-[1031px] top-[372px] font-[300] text-[24px] leading-[28px] text-[#000000]">
        Enter your credentials to continue
      </div>
      <form action="">
        <input
          type="text"
          className="absolute w-[670px] h-[80px] left-[1030px] top-[460px] 
          font-[400] text-[32px] leading-[38px] 
          px-[30px]
          border-[3px] border-[#ACACAC] rounded-[5px] focus:outline-0 focus:border-[#2B4EA2]"
          placeholder="Email"
        />

        <input
          type="password"
          className="absolute w-[670px] h-[80px] left-[1030px] top-[600px] 
          font-[400] text-[32px] leading-[38px] 
          px-[30px]
          border-[3px] border-[#ACACAC] rounded-[5px] focus:outline-0 focus:border-[#2B4EA2]"
          placeholder="Password"
        />

        <input
          type="checkbox"
          className="absolute w-[33px] h-[33px] left-[1030px] top-[719px]
          border-[2px] border-[#000000] rounded-[5px]"
        />
        <label
          className="absolute w-[157px] h-[28px] left-[1084px] top-[722px]
          font-[400] text-[24px] leading-[28px]"
        >
          Remember me
        </label>

        <p
          className="absolute w-[244px] h-[28px] left-[1457px] top-[722px]
          font-[400] text-[24px] leading-[28px] underline"
        >
          Forgot your password?
        </p>

        <input
          type="submit"
          className="absolute w-[670px] h-[82px] left-[1030px] top-[789px]
          bg-[#FF9D35] rounded-[5px]
          text-white font-[400] text-[40px] leading-[47px]"
          value={"Login"}
        />
      </form>
      <div className="absolute w-[811px] h-[1080px] bg-[#2B4EA2]"></div>
      <img
        src={image}
        className="absolute w-[849px] h-[800px] -left-[19px] top-[140px] mix-blend-screen"
        alt=""
      />
    </div>
  );
}
