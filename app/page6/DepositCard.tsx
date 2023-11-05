"use client";

import { usdc } from "@/assets/images";
import RSelect from "@/components/RSelect";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import Rebalance from "../../components/Rebalance";
import { useState } from "react";
import { useRouter } from "next/navigation";

const DepositCard = () => {
  const [curentTab, setCurrentTab] = useState<number>(1);
  const [sliderValue, setSliderValue] = useState<number>(6.09);
  const handleSliderChange = (value: number) => {
    setSliderValue(value); // Update the state with the new slider value
  };
  const router = useRouter();

  return (
    <div className="  space-y-5">
      <div>
        <div style={{ marginTop: "20px" }}>
          <RSelect />
        </div>
        <div className="flex justify-center">
          <div className=" relative z-10 px-5 pt-9 grid grid-cols-2 gap-2">
            <Button
              className="h-[55px] !rounded-b-none rounded-[15px]"
              onClick={() => setCurrentTab(1)}
            >
              Deposit
            </Button>
            <Button
              className="h-[55px] !rounded-b-none rounded-[15px]"
              variant={"secondary"}
              onClick={() => setCurrentTab(2)}
            >
              Withdraw
            </Button>
          </div>
        </div>
        <div
          className={`  relative z-40 overflow-hidden -mt-[4px]  bg-[#fff] border border-bb  rounded-[15px] card space-y-5`}
        >
          <p className="text-t-18 font-semibold">Amount</p>
          <div
            style={{ padding: "10px 15px" }}
            className="bg-transparent rounded-[10px] border border-primary flex items-center justify-between"
          >
            <h3 className="text-t-18 font-semibold">{sliderValue}</h3>
            <button
              style={{ padding: "10px 15px" }}
              className=" text-t-18 bg-secondary rounded-lg font-extrabold  text-dark"
              onClick={() => handleSliderChange(100)}
            >
              + MAX
            </button>
          </div>
          <Slider
            value={[sliderValue]}
            max={100}
            step={1}
            min={0}
            onValueChange={(i: any) => handleSliderChange(i)}
          />
          <div className=" grid grid-cols-4 gap-1">
            <button
              className=" h-[46px] text-t-16  text-white sm:text-t-18 font-extrabold bg-[#101E33] border-2 border-secondary rounded-[5px] inline-flex items-center justify-center"
              onClick={() => handleSliderChange(25)}
            >
              25%
            </button>
            <button
              className="h-[46px] text-t-16  text-white  sm:text-t-18 font-extrabold bg-[#101E33] border-2 border-secondary rounded-[5px] inline-flex items-center justify-center"
              onClick={() => handleSliderChange(50)}
            >
              50%
            </button>
            <button
              className=" h-[46px] text-t-16 text-white   sm:text-t-18 font-extrabold bg-[#101E33] border-2 border-secondary rounded-[5px] inline-flex items-center justify-center"
              onClick={() => handleSliderChange(75)}
            >
              75%
            </button>
            <button
              className=" h-[46px] text-t-16 text-white  sm:text-t-18 font-extrabold bg-[#101E33] border-2 border-secondary rounded-[5px] inline-flex items-center justify-center"
              onClick={() => handleSliderChange(100)}
            >
              100%
            </button>
          </div>
          <ul className=" space-y-4">
            <li className=" flex  items-center justify-between text-t-16 font-semibold font-comforta">
              <span className=" block">Deposit Fee</span>
              <span className=" block">0%</span>
            </li>
            <li className=" flex items-center justify-between text-t-16 font-semibold font-comforta">
              <span className=" block">Withdraw Fee</span>
              <span className=" block">0%</span>
            </li>
            <li className=" flex items-center justify-between text-t-16 font-semibold font-comforta">
              <span className=" block">Performance Fee</span>
              <span className=" block">0%</span>
            </li>
          </ul>
          <button
            style={{ padding: "15px 24px" }}
            className={`border-2 border-secondary rounded-lg text-t-18 font-bold  w-full inline-flex  items-center justify-center  ${
              curentTab === 1
                ? "text-white bg-primary"
                : "text-darken bg-secondary border-darken"
            } `}
          >
            {curentTab === 1 ? "Deposit" : "Withdraw"}
          </button>
        </div>
      </div>
      <div
        style={{ padding: "15px 25px 15px 25px" }}
        className=" bg-[#101E33]  rounded-[10px]"
      >
        <div
          className="flex items-center justify-between"
          onClick={() => router.push("/page7")}
          style={{ cursor: "pointer" }}
        >
          <div>
            <h5 className=" text-t-17 lg:text-t-20 font-bold text-secondary">
              Need USDC?
            </h5>
            <p className=" text-t-16  sm:text-t-18 font-normal text-white">
              Get the best price with one click!
            </p>
          </div>
          <div>
            <Image
              src={usdc}
              alt=""
              className=" w-[65px] h-[65px] rounded-full"
            />
          </div>
        </div>
      </div>
      <Rebalance />
    </div>
  );
};

export default DepositCard;
