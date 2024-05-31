import Image from "next/image";
import circle from "@/Assets/Images/circles.svg";
import Badge from "@/Components/Portfolio/partials/Badge.jsx";
import styles from "@/Components/Portfolio/Styles/Modules/Landing.module.css";

export default function Landing() {
  return (
    <div className="landing w-full border border-red-400 relative grid grid-cols-2">
      <Image
        className="absolute right-[-10em] top-[-20em]"
        src={circle}
        width={500}
        height={500}
        alt=""
      />

      <div className="rightSide flex flex-col">
        <span className="text-[100px]">برنامه نویســ</span>
        <span className="text-[100px] mt-[-0.7em]">وب</span>
        <Badge
          title={"فریلنسر"}
          style={{ position: "absolute", right: "9em", top: "9em" }}
        />
        <span>
          با پنج سال سابقه طراحی و توسعه وبسایت های فروشگاهی و شخصی همچون
          ریداکود ، مارکت لینک و دوونا ...
        </span>
      </div>
      <div className="leftSide">
        this is some none sense im writing that helps me to see the borders
      </div>
    </div>
  );
}
