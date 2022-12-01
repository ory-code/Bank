/* eslint-disable react/no-unescaped-entities */
import React from "react";
import style from "./AboutUs.module.scss";
import { quotes, like, airbnb, binance, dropbox, coinbase } from "../assets";
import Image from "next/image";
import Fade from "react-reveal/Fade";
const AboutUs = () => {
  return (
    <div className={`${style.aboutUs}`}>
      <div className={`${style.aboutUs__content}`}>
        <div className={`${style.content__top}`}>
          <h1>What people are saying about us</h1>
          <p>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className={`${style.content__card__box}`}>
          <Fade right>
            <div
              className={` bg-black-gradient ${style.content__card__content}`}
            >
              <Image src={quotes} alt="" width={45} height={45} />
              <p>
                Money is only a tool. It will take you wherever you wish, but it
                will not replace you as the driver.
              </p>
              <div className={`${style.content__card__people}`}>
                <Image src={like} alt="" width={50} height={50} />
                <div className={`${style.content__card__people__name}`}>
                  <span>Sacha Ory</span>
                  <span>Dev junior</span>
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div
              className={`bg-black-gradient ${style.content__card__content}`}
            >
              <Image src={quotes} alt="" width={45} height={45} />
              <p>
                Money makes your life easier. If you're lucky to have it, you're
                lucky.
              </p>
              <div className={` ${style.content__card__people}`}>
                <Image src={like} alt="" width={50} height={50} />
                <div className={`${style.content__card__people__name}`}>
                  <span>Sacha Ory</span>
                  <span>Dev junior</span>
                </div>
              </div>
            </div>
          </Fade>
          <Fade left>
            <div
              className={`bg-black-gradient ${style.content__card__content}`}
            >
              <Image src={quotes} alt="" width={45} height={45} />
              <p>
                It is usually people in the money business, finance, and
                international trade that are really rich.
              </p>
              <div className={`${style.content__card__people}`}>
                <Image src={like} alt="" width={50} height={50} />
                <div className={`${style.content__card__people__name}`}>
                  <span>Sacha Ory</span>
                  <span>Dev junior</span>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <div className={`${style.logo__client}`}>
          <Fade bottom>
            <Image src={airbnb} alt="" width={200} height={50} />
          </Fade>
          <Fade top>
            <Image src={binance} alt="" width={200} height={50} />
          </Fade>
          <Fade right>
            <Image src={dropbox} alt="" width={200} height={50} />
          </Fade>
          <Fade left>
            <Image src={coinbase} alt="" width={200} height={50} />
          </Fade>
        </div>
        <div className={`${style.bottom__section}`}>
          <div className={`bg-black-gradient-2 ${style.bottom}`}>
            <div className={` ${style.bottom__text}`}>
              <h1>Let’s try our service now!</h1>
              <p>
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
              </p>
            </div>

            <Fade bottom>
              <div className={`${style.bottom__button}`}>
                <button className="bg-blue-gradient">Get Started</button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
