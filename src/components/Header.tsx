import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";
import logoDark from "@/assets/logo-light.svg";
import logoLight from "@/assets/logo-dark.svg";
import logoMobile from "@/assets/logo-mobile.svg";
import HeaderDropdown from "./HeaderDropdown";

export default function Header({ boardName }: { boardName: string }) {
  return (
    <div className="h-auto py-6 px-4 flex bg-white dark:bg-gray-600 justify-between items-center">
      <div className="flex">
        <div className="hidden md:inline-block mr-28">
          <Image className="block dark:hidden" src={logoLight} alt="logo" />
          <Image className="hidden dark:block" src={logoDark} alt="logo" />
        </div>
        <div className="md:hidden">
          <Image src={logoMobile} alt="logo" />
        </div>
        <p className="text-lg font-bold md:text-2xl ml-4">
          {boardName} <HeaderDropdown />
        </p>
      </div>
      <div>
        <ThemeSwitch />
      </div>
    </div>
  );
}
