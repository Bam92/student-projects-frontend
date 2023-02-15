import React from "react";
import { Link } from "react-router-dom";
import Gda from "../../assets/Logo.svg";

const NavBar = () => {
  const link = [
    { text: "Accueil", link: "/" },
    { text: "Projets", link: "projets" },
    { text: "Blogs", link: "blogs" },
    { text: "A propos", link: "apropos" },
  ];
  const [isActive, setActive] = React.useState({
    keyAct: 0,
  });
  return (
    <nav className="  flex  justify-between py-8  px-12 shadow-md  items-center fixed w-full z-[9000]    bg-white  ">
      <Link to={"/"}>
        <img src={Gda} alt="" className="w-[155.22px] h-[23.66px]" />
      </Link>
      <ul className="hidden sm:flex lg:flex xl:flex   text-[16px] text-[#1F2325]  font-normal  justify-center items-center  gap-24">
        {link &&
          link.map((item, key) => (
            <li
              onClick={() => {
                setActive({ keyAct: key });
              }}
              className={
                isActive.keyAct === key
                  ? "text-[#D92950] "
                  : " hover:text-[#d9294f9a] "
              }
              key={key}
            >
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default NavBar;
