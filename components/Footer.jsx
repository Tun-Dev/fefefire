import Image from "next/image";
import Fefelogo from "../public/Fefefire.svg";
import IG from "../public/ig.svg";
import FB from "../public/fb.svg";
import Twitter from "../public/twitter.svg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";

const Footer = () => {
  let footer = useRef(null);
  var tl = gsap.timeline();
  // For Footer
  useEffect(() => {
    gsap.fromTo(
      footer,
      { y: -10 },
      {
        y: 15,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 1,
      }
    );
  });

  return (
    <footer ref={(el) => (footer = el)}>
      <div className="fticons">
        <Image src={FB} />
        <Image src={Twitter} />
        <Image src={IG} />
      </div>
      <div className="ftwords">
        <p>reachfefefire@enquries.com</p>
        <Image src={Fefelogo} />
      </div>
    </footer>
  );
};

export default Footer;
