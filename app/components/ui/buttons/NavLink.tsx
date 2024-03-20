import { usePathname } from "next/navigation";
import Link from "next/link";
import { links } from "@/app/components/lib/data";

interface LinkItem {
  id: number;
  label: string;
  href: string;
}

const NavLink: React.FC = () => {
  const pathname = usePathname();

  // Map over the links array and return an array of Link Elements
  const linkElements = links.map((link: LinkItem) => (
    <Link
      key={link.id}
      href={link.href}
      className={`${
        pathname === link.href ? "text-blue-600" : "text-blue-400"
      }`}
    >
      {link.label}
    </Link>
  ));

  return <>{linkElements}</>;
};

export default NavLink;
