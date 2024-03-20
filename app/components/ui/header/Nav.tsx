"use client";
import NavLink from "../buttons/NavLink";

const Nav: React.FC = () => {
  return (
    <>
      <ul className=" flex min-w-56 justify-between">
        <NavLink />
      </ul>
    </>
  );
};

export default Nav;
