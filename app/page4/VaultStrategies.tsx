"use client";
import DemoPie from "@/components/common/PieChart";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const data: any[] = [
  {
    type: "Delta Prime",
    value: 65,
    color: "purple",
  },
  {
    type: "Yield Yark",
    value: 35,
    color: "green",
  },
];

const VaultStrategies = () => {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div>
      <div className="flex justify-center">
        <div className=" relative z-10 px-5 pt-9 grid grid-cols-2 gap-2">
          <Button
            onClick={() => setTabIndex(1)}
            className="h-[55px] !rounded-b-none rounded-[15px]"
          >
            Vault Strategies
          </Button>
          <Button
            onClick={() => setTabIndex(2)}
            className="h-[55px] !rounded-b-none rounded-[15px]"
            variant={"secondary"}
          >
            Contract Information
          </Button>
        </div>
      </div>
      <div
        className={`  relative z-40 overflow-hidden -mt-[4px] p-5  bg-[#fff] border border-bb  rounded-[15px] card space-y-5`}
      >
        {tabIndex === 1 ? (
          <div className=" flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="basis-[45%] space-y-5">
              <h3 className=" text-t-22 text-darken font-extrabold">
                BTC.b Vault
              </h3>
              <p className=" text-t-16 text-darken font-medium">
                The BTC.b Vault has a number of parameters used to guide its
                creation, including underlying protocol risk, sub-strategy yield
                over time, and fee optimizations. The first protocols selected
                for the BTC.b Vault are Delta Prime and Yield Yak. To learn more
                about the strategies used in the BTC.b sub-strategies, please
                see the link below.
              </p>
              <div style={{ textAlign: "center" }}>
                <Button className="bg-darken h-[50px]">Learn More</Button>
              </div>
            </div>
            {/* Pie Chart */}
            <DemoPie items={data} />
          </div>
        ) : (
          <p className=" text-t-22 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            necessitatibus iste amet. Eos hic, dignissimos veritatis iure id
            earum! Consequuntur impedit corrupti provident optio aliquam.
          </p>
        )}
      </div>
    </div>
  );
};

export default VaultStrategies;
