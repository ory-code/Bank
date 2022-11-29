import React from "react";
import style from "./Business.module.scss";
import { send, shield, star } from "../assets";
import Image from "next/image";
const Business = () => {
  return (
    <>
      <div className={`${style.business__container}`}>
        <div className={`${style.business__content__text}`}>
          <h1>You do the business, we’ll handle the money.</h1>
          <p>
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <div className={`${style.business__text_button}`}>
            <button className="bg-blue-gradient">Get Started</button>
          </div>
        </div>
        <div className={`${style.business__card}`}>
          <div className={` bg-gray-gradient ${style.business__content__card}`}>
            <Image src={star} alt="" width={32} height={32} />
            <div className={`${style.business__content__card__text}`}>
              <h2>Rewards</h2>
              <p>
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
            </div>
          </div>
          <div
            className={` bg-black-gradient ${style.business__content__card}`}
          >
            <Image src={shield} alt="" width={32} height={32} />
            <div className={`${style.business__content__card__text}`}>
              <h2>Rewards</h2>
              <p>
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
            </div>
          </div>
          <div className={` bg-gray-gradient ${style.business__content__card}`}>
            <Image
              src={send}
              alt=""
              width={32}
              height={32}
              className={`  ${style.business__content__card__icon}`}
            />
            <div className={`${style.business__content__card__text}`}>
              <h2>Rewards</h2>
              <p>
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Business;
