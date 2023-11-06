"use client";
import { logo } from "@/assets/images";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const routes: any = {
  "/page1": "/page3",
  "/page4": "/page3",
  "/page5": "/page3",
  "/page6": "/page3",
};

const Header = () => {
  const [currentRoute, setRoute] = useState("/");

  const router = useRouter();

  const location: string = usePathname();

  const hangleChange = (value: any) => {
    router.push(value);
    // router.refresh();
  };

  useEffect(() => {
    if (routes[location]) {
      setRoute(routes[location]);
    } else {
      setRoute("/");
    }
  }, [location]);

  console.log({ location, currentRoute });

  return (
    <header className=" py-6 container  flex items-center justify-between flex-wrap">
      <Link href={currentRoute} style={{ marginBottom: "20px" }}>
        <Image className=" w-[55%] md:w-full" alt="logo" src={logo} />
      </Link>

      <div className="grid grid-cols-4 gap-3 w-auto md:w-[calc(230px*2)]">
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Chain" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="/">AVAX</SelectItem>
          </SelectContent>
        </Select>
        <Button className="flex h-[50px] w-full items-center font-comforta  justify-center font-bold rounded-full border border-[#F2EFD1] bg-[#101C2D] px-3 py-2 text-sm  placeholder:text-white text-white focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50">
          Profile
        </Button>
        <Select onValueChange={(v) => hangleChange(v)}>
          <SelectTrigger className="">
            <SelectValue placeholder="Address" />
          </SelectTrigger>
          <SelectContent>
            {/* <SelectItem value="/page1">Profile</SelectItem> */}
            <SelectItem value="/connect">Connect</SelectItem>
          </SelectContent>
        </Select>
        <Button
          className="flex h-[50px] w-full items-center font-comforta  justify-center font-bold rounded-full border border-[#F2EFD1] bg-[#101C2D] px-3 py-2 text-sm  placeholder:text-white text-white focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => router.push("/page3")}
        >
          Vaults
        </Button>
      </div>
    </header>
  );
};

export default Header;
