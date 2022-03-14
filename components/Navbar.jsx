import Image from "next/image";
import { Search, User, Heart, Cart, Fefelogo } from "../public";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";

const Navbar = () => {
  let nav = useRef(null);
  var tl = gsap.timeline();
  // For Footer
  useEffect(() => {
    gsap.from(nav, {
      yPercent: -100,
      // repeat: -1,s
      // yoyo: true,
      opacity: 0,
      ease: "back",
      duration: 2,
    });
  });
  return (
    <>
      <nav ref={(el) => (nav = el)}>
        <div className="logo">
          <Image src={Fefelogo} />
        </div>
        <div className="navlinks">
          <h4>Shop</h4>
          <h4>About</h4>
          <h4>Lookbook</h4>
        </div>
        <div className="navicons">
          <div className="icons">
            <Image src={Search} />
            <Image src={User} />
            <Image src={Heart} />
            <Image src={Cart} />
          </div>
          <div className="mobileicon">
            <Image src={User} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
