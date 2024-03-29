"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";

//! import components
import DefaultCard from "@/components/Card/DefaultCard";
import Success from "@/components/Alert/Success";
import DefaultSelect from "@/components/Form/DefaultSelect";
import Input from "@/components/Form/Input";

//! import Image
import BurnImage from "@/assets/image/burn-image.png";
import ExportedImage from "next-image-export-optimizer";

const FooterButton = () => {
  return (
    <div className="flex flex-row gap-6 justify-end max-sm:flex-row-reverse">
      <button className="px-8 py-4 border border-[#86888C] rounded-[8px] text-center text-[#86888C] text-[20px] max-sm:text-sm max-sm:px-6">
        Reset
      </button>
      <button className="px-8 py-4 border border-[#aaaaaaff] bg-[#aaaaaaff] rounded-[8px] text-center text-[#16171B] text-[20px] max-sm:text-sm max-sm:px-6">
        Create Token
      </button>
    </div>
  );
};

const CreateToken = () => {
  const [tokenType, setTokenType] = useState([
    { text: "Standard Token", value: 1 },
    { text: "Liquidity Generator Token", value: 2 },
    { text: "Baby Token", value: 3 },
    { text: "Buyback Baby Token", value: 4 },
  ]);
  return (
    <div className="relative min-h-[1500px]">
      <DefaultCard
        header="Create Token"
        footer={true}
        footerWrapper={<FooterButton />}
      >
        <div>
          <Success>
            <p className="text-white text-[14px]">
              All created tokens include an Audit. <br />
              Audits can be found <span className="text-[#aaaaaaff]">here</span>.
              Created tokens also get Audit badge on Flashlaunch presales
              automatically.
            </p>
          </Success>
          <div className="flex flex-col pt-11 gap-8">
            <div>
              <DefaultSelect optons={tokenType} />
              <span className="text-[14px] text-[#aaaaaaff]">Fee: 0.1 BNB</span>
            </div>

            <div className="flex flex-row gap-8 max-sm:flex-col">
              <Input label="TOKEN NAME" placeholder="Ex: Ethereum" />
              <Input label="TOKEN SYMBOL" placeholder="Ex: ETH" />
            </div>

            <div className="flex flex-row gap-8 max-sm:flex-col">
              <Input label="TOKEN DECIMALS" placeholder="18" />
              <Input label="TOTAL SUPPLY" placeholder="Ex: 1000000000" />
            </div>
          </div>
        </div>
      </DefaultCard>

      <ExportedImage
        src={BurnImage}
        alt="image"
        className="absolute -bottom-16 -right-10 max-sm:hidden"
      />
    </div>
  );
};

export default CreateToken;
