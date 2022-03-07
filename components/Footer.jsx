import Image from "next/image";
import Fefelogo from "../public/Fefefire.svg";
import IG from "../public/ig.svg";
import FB from "../public/fb.svg";
import Twitter from "../public/twitter.svg";

const Footer = () => {
  return (
    <footer>
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
