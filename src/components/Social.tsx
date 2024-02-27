import Link from "next/link";
import {
  BiAt,
  BiLogoBehance,
  BiLogoGmail,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import { ImMail } from "react-icons/im";

export default function Social() {
  const links = [
    {
      src: "https://www.behance.net/ragaey",
      name: "Ragaey Behance",
      icon: <BiLogoBehance />,
    },
    {
      src: "https://www.instagram.com/ragaey.art",
      name: "Ragaey Instagram",
      icon: <BiLogoInstagram />,
    },
    {
      src: "mailto:rag.sameh@gmail.com",
      name: "Ragaey Email Address",
      icon: <BiLogoGmail />,
    },
    {
      src: "https://www.linkedin.com/in/ragaey-sameh-a01bab84/",
      name: "Ragaey Linkedin",
      icon: <BiLogoLinkedin />,
    },
  ];
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      {links &&
        links.map((link) => (
          <Link
            key={link.name}
            href={link.src}
            target="_blank"
            title={link.name}
            className="text-xl text-[#031A5F] bg-[#fff] border p-1 rounded-lg"
          >
            {link.icon}
          </Link>
        ))}
    </div>
  );
}
