"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/app/components/lib/data";

const Nav: React.FC = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <ul className=" flex min-w-56 justify-between">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              pathname === link.href
                ? " border- bg-cyan-500 shadow-sm shadow-cyan-400"
                : "border-cyan-600 bg-cyan-700"
            }
            border-2 font-bold rounded-md py-1 px-1.5`}
          >
            <Link
              href={link.href}
              className={`${
                pathname === link.href ? "text-cyan-900" : "text-cyan-100"
              } no-underline text-2xl  px-2`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Nav;
