import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "../Components/HeaderItem";

function Header() {
  return (
    <header className="">
      <div>
        <HeaderItem title="HOME" Icon={HomeIcon} />
      </div>
      <Image
        alt=""
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
