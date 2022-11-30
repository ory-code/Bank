import React from "react";
import style from "./Billing.module.scss";
import { apple, google, bill, card } from "../assets";
import Image from "next/image";
const Billing = () => {
  return (
    <div className={`${style.billing}`}>
      <div className={`${style.billing__content}`}>
        <div className={`${style.billing__text}`}>
          <h1> Easily control your billing & invoicing.</h1>
          <p>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className={`${style.billing__icn}`}>
            <Image src={apple} alt="" width={102} height={102} />
            <Image src={google} alt="" width={102} height={102} />
          </div>
        </div>
        <div className={`${style.billing__image}`}>
          <Image src={bill} alt="" width={302} height={302} />
        </div>
      </div>
      <div className={`${style.billing__content}`}>
        <div className={`${style.billing__text}`}>
          <h1> Find a better card deal in few easy steps.</h1>
          <p>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <div className={`${style.billing__button}`}>
            <button className="bg-blue-gradient">Get Started</button>
          </div>
        </div>
        <div className={`${style.billing__image}`}>
          <Image src={card} alt="" width={302} height={302} />
        </div>
      </div>
    </div>
  );
};

export default Billing;
