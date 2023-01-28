import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
  ];
  return (
    <div>
      Header
      {links.map((l) => (
        <Link key={crypto.randomUUID()} to={l.href}>
          {l.label}
        </Link>
      ))}
    </div>
  );
};

export default Header;
