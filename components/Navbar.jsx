import Image from "next/image";
import Fefelogo from "../public/Fefefire.svg";
import Search from "../public/search1.svg";
import User from "../public/user1.svg";
import Heart from "../public/heart2.svg";
import Cart from "../public/shopping-cart1.svg";

const Navbar = () => {
  return (
    <>
      <nav>
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;