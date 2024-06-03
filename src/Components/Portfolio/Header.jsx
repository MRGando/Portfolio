import styles from "@/Components/Portfolio/Styles/Modules/Header.module.css";
import circles from "@/Assets/Images/circles.svg";
import Image from "next/image";
import logo from "@/Assets/Icons/logo.png";
import arrowIcon from "@/Assets/Icons/arrow.svg";
import { useState, useContext } from "react";
import Menu from "@/Components/Portfolio/partials/Menu";
import { HambButton } from "./partials/HambButton";
import { Context } from "@/Context/Context";

export default function Header() {
  const { showMenu, setShowMenu, menuStatus, setMenuStatus } =
    useContext(Context);

  return (
    <>
      <div className="md:flex hidden max-w-[1390px] w-[90%] h-[85px] bg-[white] rounded-[20px] fixed z-10  left-[50%] translate-x-[-50%] top-[38px] justify-between items-center px-[20px] shadow-md">
        <Image
          className={styles.logo}
          src={logo}
          width={60}
          height={60}
          alt=""
        />
        <ul className={styles.menu}>
          <li>رزومه</li>
          <li>نمونه کار</li>
          <li>وبلاگ</li>
          <li>حمایت</li>
        </ul>
        <button className={styles.talkButton}>
          {" "}
          صحبت کنیم
          <Image className={styles.arrowIcon} src={arrowIcon} />
        </button>
      </div>
      <div className="md:hidden flex max-w-[1390px] w-[90%] h-[85px] bg-[white] rounded-[20px] fixed z-10  left-[50%] translate-x-[-50%] top-[38px] justify-between items-center px-[20px] shadow-md">
        {showMenu && <Menu />}
        <HambButton />
        <Image
          className={styles.logo}
          src={logo}
          width={60}
          height={60}
          alt=""
        />
        {menuStatus && (
          <div className="small-menu">
            <ul className={styles.menu}>
              <li>رزومه</li>
              <li>نمونه کار</li>
              <li>وبلاگ</li>
              <li>حمایت</li>
            </ul>
            <button className={styles.talkButton}>
              صحبت کنیم
              <Image className={styles.arrowIcon} src={arrowIcon} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
