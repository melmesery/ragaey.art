import Image from "next/image";
import profile from "../../public/profile.png";
import Social from "../components/Social.tsx";

export default function Home() {
  return (
    <div className="w-[90%] lg:max-w-[1350px] mx-auto flex flex-col items-center justify-center min-h-screen text-center text-[#031A5F]">
      <div>
        <Image
          src={profile}
          width={100}
          height={100}
          alt="Ragaey Sameh"
          className="block mx-auto rounded-full mb-5"
        />
        <h1 className="text-2xl md:text-5xl font-extrabold mb-3">
          Ragaey Sameh
        </h1>
        <h1 className="text-2xl md:text-5xl font-extrabold mb-5">Portfolio</h1>
        <p className="text-base xs:text-lg mb-5 w-full xs:w-[40%] mx-auto">
          Hello everyone, welcome to my personal website. Actually, I am still
          working on it so you can check my social media accounts for now.
        </p>
        <Social />
      </div>
    </div>
  );
}
