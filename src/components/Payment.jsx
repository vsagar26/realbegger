import React from "react";
import { style } from "../style";
import { icons } from "../constants";

const Payment = () => {
  return (
    <section className={`flex flex-col pb-20`}>
      <div>
        <h2 className={`${style.subheading} ${style.flexCenter} mt-12`}>
          AVAILABLE PAYMENT METHODS
        </h2>
      </div>
      <div className={`bg-white mt-12`}>
        <div className={` w-full mt-10 flex flex-col sm:flex-row sm:w-[150px] items-center w-[180px] `}>
          {icons.map((icons, index) => (
            <img src={icons.img} key={icons.id} alt="img" className={`sm:py-16 ml-[200px] sm:ml-32 pt-16 sm:pt-0 ${index===icons.length-1?"mb-0":"mb-12 sm:mb-0"} sm:mt-10`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Payment;
