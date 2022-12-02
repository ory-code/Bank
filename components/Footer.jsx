import Image from "next/image";
import React from "react";
import style from "./Footer.module.scss";
import { logo } from "../assets/";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={`  ${style.footer}`}>
      <div className={`${style.footer__content}`}>
        <div className={`${style.footer__content__logo}`}>
          <Image src={logo} alt="" width={180} height={45} />
          <p> A new way to make the payments easy, reliable and secure. </p>
        </div>
        <div className={`${style.footer__content__text}`}>
          <h3>Usefull Links</h3>
          <ul>
            <li>Content </li>
            <li>How it Works</li>
            <li>Create</li>
            <li>Explore</li>
            <li>How it Works</li>
            <li>Terms & Services</li>
          </ul>
        </div>
        <div className={`${style.footer__content__text}`}>
          <h3>Community</h3>
          <ul>
            <li>Help Center </li>
            <li>Partners</li>
            <li>Suggestions</li>
            <li>Blog</li>
            <li>Newsletters</li>
          </ul>
        </div>
        <div className={`${style.footer__content__text}`}>
          <h3>Partner</h3>
          <ul>
            <li>Our Partner </li>
            <li>Become a Partner</li>
          </ul>
        </div>
      </div>
      <div className={`${style.footer__bottom}`}>
        <div className={`${style.footer__icon__text}`}>
          <span> 2022. Code by Sacha. </span>
        </div>
        <div className={`${style.footer__icon}`}>
          <Link href="https://www.linkedin.com/in/sacha-ory-developer/" target="_blank" rel="noopener norefer">
            <LinkedInIcon sx={{ fontSize: 40, margin: " 0 18px" }} />
          </Link>
          <Link href="https://github.com/ory-code" target="_blank" rel="noopener norefer" >
            <GitHubIcon sx={{ fontSize: 40, margin: " 0 18px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
