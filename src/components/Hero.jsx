import { original } from "../assets";
import { style } from "../style";
import Button from "./Button";
import "./neon.css";

const Hero = () => {
  return (
    <section className={`flex flex-col h-[100vh]`}>
      <div className={`flex flex-col`}>
        <div className={`flex flex-col sm:flex-row`}>
          <div className={style.flexStart}>
            <h2
              className={`${style.heading2} ${style.marginX} ${style.marginY} w-[450px] sm:w-[850px]`}
            >
              INDIA'S{" "}
              <span className={`text-[#A66EFF] font-bold neon`}>LARGEST </span>
              ONLINE BETTING
              
              PLATFORM PROVIDER
            </h2>
          </div>
          <div>
            <img
              src={original}
              alt="original"
              className={`w-[220px] sm:w-[350px] ${style.marginX} mt-[-40px] py-0 sm:py-0 sm:mt-24 rotate-45`}
            />
          </div>
        </div>
        <div className={`${style.flexCenter} flex-row gap-8 sm:gap-20 mt-12`}>
          <Button title="GET MASTER ID" type="button"/>
          <Button title="GET YOUR ID" type="button"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
