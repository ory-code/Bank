import Image from "next/image";
import React from "react";
import style from "./Banner.module.scss";
import { discount, arrowUp, robot } from "../assets";
const Banner = () => {
  return (
    <div className={` bg-gray-gradient ${style.banner}`}>
      <div className={`bg-discount-gradient ${style.banner__discount}`}>
        <Image
          src={discount}
          alt="icon discount"
          width={32}
          height={32}
          className={`${style.discount__icon}`}
        />
        <span>20% DISCOUNT FOR</span> <br />
        <span>1 MONTH</span> <br />
        <span>ACCOUNT</span>
      </div>
      <div className={`${style.banner__container}`}>
        <div className="banner__title">
          <span className={` ${style.span}`}> The Next </span> <br />
          <span className={` text-gradient ${style.span}`}>Generation</span>
          <br />
          <span className={` ${style.span}`}> Payment Method </span>
          <div className={` ${style.desc}`}>
            <p className={` ${style.p}`}>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
        </div>
        <div className={`${style.button__getStarted}`}>
          <div className={`${style.button__getStarted__content}`}>
            <div className={` text-gradient ${style.top__button}`}>
              <span>Get</span>
              <Image src={arrowUp} width={40} height={40} alt="" />
            </div>
            <span className="text-gradient">Started</span>
          </div>
        </div>
        <div className={`${style.image__banner}`}>
          <Image src={robot} alt="" width={700} height={738} />
        </div>
      </div>

      <div className={`${style.info}`}>
        <div className={`${style.info__data}`}>
          <p className={`${style.number}`}>3800+</p>
          <p className="text-gradient">USE ACTIVE</p>
          <span>|</span>
        </div>
        <div className={`${style.info__data}`}>
          <p className={`${style.number}`}>230+</p>
          <p className="text-gradient">TRUSTED BY COMPAGNY</p>
          <span>|</span>
        </div>
        <div className={`${style.info__data}`}>
          <p className={`${style.number}`}>230M+ €</p>
          <p className="text-gradient">TRANSACTION</p>
          <span>|</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
