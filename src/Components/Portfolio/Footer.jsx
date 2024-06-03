import styles from "@/Components/Portfolio/Styles/Modules/Footer.module.css";
import circlesImage from "@/Assets/Images/circles.svg";
import dribbbleIcon from "@/Assets/Icons/dribbble.svg";
import instagramIcon from "@/Assets/Icons/instagram.svg";
import youtubeIcon from "@/Assets/Icons/youtube.svg";
import telegramIcon from "@/Assets/Icons/telegram.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.main}>
      {/* <Image
        src={circlesImage}
        width={300}
        height={300}
        className={styles.circles}
        alt=""
      /> */}
      <span className={styles.floatText}>فوتر</span>
      <div className="Container">
        <div className={styles.content}>
          <span>
            تمامی حقوق نزد طراح محقوظ است ©
            <span>{new Date().getFullYear()}</span>
          </span>
          <div className={styles.icons}>
            <Image src={dribbbleIcon} width={300} height={300} alt="" />
            <Image src={instagramIcon} width={300} height={300} alt="" />
            <Image src={youtubeIcon} width={300} height={300} alt="" />
            <Image src={telegramIcon} width={300} height={300} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
