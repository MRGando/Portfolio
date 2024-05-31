import styles from "@/Components/Portfolio/Styles/Modules/Header.module.css";
import circles from "@/Assets/Images/circles.svg";
import Image from "next/image";
import logo from "@/Assets/Icons/logo.png";
import arrowIcon from "@/Assets/Icons/arrow.svg";

export default function Header() {
  return (
    <div className={styles.main}>
      
      <Image className={styles.logo} src={logo} width={60} height={60} alt="" />
      <ul className={styles.menu}>
        <li>رزومه</li>
        <li>نمونه کار</li>
        <li>وبلاگ</li>
        <li>حمایت</li>
      </ul>

      <button className={styles.talkButton}>
        {" "}
        <Image className={styles.arrowIcon} src={arrowIcon} />
        صحبت کنیم
      </button>
    </div>
  );
}
