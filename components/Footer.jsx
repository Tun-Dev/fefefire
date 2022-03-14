import Image from "next/image";
import { Fefelogo, IG, FB, Twitter } from "../public";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";

const Footer = () => {
  let footer = useRef(null);
  let footer1 = useRef(null);
  var tl = gsap.timeline();
  // For Footer
  useEffect(() => {
    gsap.fromTo(
      [footer, footer1],
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
    <footer>
      <div className="fticons" ref={(el) => (footer = el)}>
        <Image src={FB} />
        <Image src={Twitter} />
        <Image src={IG} />
      </div>
      <div className="ftwords" ref={(el) => (footer1 = el)}>
        <p>reachfefefire@enquries.com</p>
        <Image src={Fefelogo} />
      </div>
    </footer>
  );
};

export default Footer;
