import Image from "next/image";
import { Fefelogo, IG, FB, Twitter } from "../public";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";

const Footer = () => {
  // let footer = useRef(null);
  // let footer1 = useRef(null);
  // var tl = gsap.timeline();
  // // For Footer
  // useEffect(() => {
  //   gsap.fromTo(
  //     [footer, footer1],
  //     { y: -10 },
  //     {
  //       y: 15,
  //       repeat: -1,
  //       yoyo: true,
  //       ease: "power1.inOut",
  //       duration: 1,
  //     }
  //   );
  // });
  // ref={(el) => (footer = el)}
  // ref={(el) => (footer1 = el)}

  return (
    <footer>
      <div className="fticons">
        <Image src={FB} />
        <Image src={Twitter} />
        <Image src={IG} />
      </div>
      {/* <div>
        <div>
          <h1>
            Designed by{" "}
            <a
              href="https://oghenetega.disha.page/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oghenetega
            </a>
          </h1>
          <h1>
            Developed by{" "}
            <a
              href="http://twitter.com/tunzdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              ZOD.jsx
            </a>
          </h1>
        </div>
      </div> */}
      <div className="ftwords">
        <p>reachfefefire@enquries.com</p>
        <Image src={Fefelogo} />
      </div>
    </footer>
  );
};

export default Footer;
