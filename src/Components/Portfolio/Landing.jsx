"use client";
import Image from "next/image";
import circle from "@/Assets/Images/circles.svg";
import Badge from "@/Components/Portfolio/partials/Badge.jsx";
import styles from "@/Components/Portfolio/Styles/Modules/Landing.module.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Room } from "@/Components/Portfolio/partials/Room";

export default function Landing() {
  return (
    <div className="landing w-full relative lg:grid lg:grid-cols-2 my-4 grid-rows-2 grid-cols-none">
      <Image
        className="absolute right-[-10em] top-[-20em]"
        src={circle}
        width={500}
        height={500}
        alt=""
      />

      <div className="rightSide flex flex-col mx-auto">
        <span className="text-[100px]">برنامه نویســ</span>
        <span className="relative text-[100px] mt-[-0.7em]">
          وب{" "}
          <Badge
            title={"فریلنسر"}
            style={{
              position: "absolute",
              right: "7em",
              top: "3em",
              fontSize: "21px",
            }}
          />
        </span>

        <span className="text-gray-600 text-[22px] w-[430px]">
          با پنج سال سابقه طراحی و توسعه وبسایت های فروشگاهی و شخصی همچون
          ریداکود ، مارکت لینک و دوونا ...
        </span>
      </div>
      <div className="leftSide relative w-full h-[30em]">
        <span className="absolute left-0 bottom-[-0.3em] text-[#BABDC0] text-[250px] z-[-1]">
          پورتفولیو
        </span>
        <Canvas
          camera={{ position: [400, 400, 700], fov: 50, near: 0.1, far: 5000 }}>
          {/* <ambientLight />
          <pointLight position={[3, 3, 3]} /> */}
          <Environment preset="city" />
          <OrbitControls enableZoom={false} enablePan={false} />
          <Room />
        </Canvas>
      </div>
    </div>
  );
}
