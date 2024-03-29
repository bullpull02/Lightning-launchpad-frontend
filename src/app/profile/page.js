"use client";

import React, { useState, useEffect } from "react";

import HeaderSection from "@/components/HeaderSection";

import Image from "next/image";

//! import icon
import CopyYelloIcon from "@/assets/icons/copy-yello.svg";
import Filter from "@/assets/icons/filter.svg";
import NoDataIcon from "@/assets/icons/no-data.svg";
import LogoIcon from "@/assets/icons/logo.svg";
import PageLeftIcon from "@/assets/icons/page-left.svg";
import PageRightActive from "@/assets/icons/page-right-active.svg";
import ExportedImage from "next-image-export-optimizer";

const Profile = () => {
  const [tabActive, setTabActive] = useState(0);

  const tabItems = [
    { name: "Activities" },
    { name: "Affiliate" },
    { name: "Favorited" },
    { name: "Recently Viewed" },
  ];

  return (
    <div className="min-h-[1500px]">
      <HeaderSection />
      <div className="p-7 bg-[#000000ff] rounded-[16px]">
        <div className="flex flex-col gap-3 pb-8 border-b border-[#2C2C2C]">
          <div className="flex flex-row gap-2">
            <p className="text-white text-[16px] break-words max-sm:max-w-[280px]">
              Connected as 0x15f5aC23FEA29c0f8be082EB490D3a18d7d08892
            </p>
            <ExportedImage src={CopyYelloIcon} alt="icon" />
          </div>
          <p className="text-[16px] text-[#aaaaaaff]">0.639639 ETH</p>
        </div>
        <div className="flex flex-row gap-4 mt-7 max-sm:w-[100%]">
          <button className="py-3 px-5 rounded-lg bg-[#aaaaaaff] max-sm:w-[100%]">
            Share your profile
          </button>
          <button className="py-3 px-5 rounded-lg border border-[#2C2C2C] max-sm:w-[100%] text-[#86888C]">
            Logout
          </button>
        </div>
      </div>

      <div className="p-7 rounded-[16px] bg-[#000000ff] mt-6 min-h-[567px]">
        <div className="max-sm:overflow-x-scroll">
          <div className="flex flex-row pb-5 border-b border-[#2C2C2C] gap-8 max-sm:w-[1500px]">
            {tabItems.map((item, index) => (
              <div
                className="relative cursor-pointer"
                key={index}
                onClick={() => setTabActive(index)}
              >
                <p
                  className={`text-base ${
                    tabActive === index ? "text-[#aaaaaaff]" : "text-white"
                  }`}
                >
                  {item.name}
                </p>
                {tabActive === index && (
                  <hr className="h-0.5 border-0 bg-[#aaaaaaff] w-[100%] absolute -bottom-[21px] left-0"></hr>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          {tabActive === 0 && (
            <div>
              <div className="py-[46px] justify-center w-[100%] border border-[#2C2C2C] flex flex-row max-sm:flex-col max-sm:gap-[70px] gap-[345px]">
                <div className="flex flex-col items-center text-white gap-3">
                  <p className="text-base">TOTAL POOL INVESTED</p>
                  <p className="text-4xl">0</p>
                </div>
                <div className="flex flex-col items-center text-white gap-3">
                  <p className="text-base">TOTAL POOL INVESTED</p>
                  <p className="text-4xl">0</p>
                </div>
                <div className="flex flex-col items-center text-white gap-3">
                  <p className="text-base">TOTAL POOL INVESTED</p>
                  <p className="text-4xl">0</p>
                </div>
              </div>

              <div className="max-sm:overflow-x-scroll">
                <div className="mt-[70px] max-sm:w-[1550px]">
                  <div className="flex flex-row text-base text-white pb-4 border-b border-[#2C2C2C]">
                    <div className="w-[250px] border-r border-[#2C2C2C] pr-6">
                      Name
                    </div>
                    <div className="w-[250px] pl-3 pr-6 border-r border-[#2C2C2C]">
                      Data
                    </div>
                    <div className="w-[250px] pl-3 pr-6 border-r border-[#2C2C2C]">
                      Amount
                    </div>
                    <div className="flex flex-row pl-3 pr-6 border-r border-[#2C2C2C]">
                      <p className="w-[250px]">Type</p>
                      <ExportedImage src={Filter} alt="filter" />
                    </div>
                    <div className="w-[250px] pl-3 pr-6 border-r border-[#2C2C2C]">
                      Transaction
                    </div>
                  </div>
                  <div className="h-[285px] flex flex-col justify-center items-center gap-3 border-b border-[#2C2C2C]">
                    <ExportedImage src={NoDataIcon} alt="no data" />
                    <p className="text-lg text-[#2F2F2F]">No Data</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {tabActive === 1 && (
            <div className="flex flex-col justify-center items-center gap-3 mt-[191px]">
              <ExportedImage src={NoDataIcon} alt="no data" />
              <p className="text-lg text-[#2F2F2F]">No Data</p>
            </div>
          )}
          {tabActive === 2 && (
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row gap-[30px]">
                <ExportedImage
                  src={LogoIcon}
                  alt="logo icon"
                  className="rounded-full w-[48px] h-[48px]"
                />
                <div className="text-white flex flex-col gap-1 text-base">
                  <p className="font-semibold">Flash 3.0 Fairlaunch</p>
                  <p className="font-semibold">Flash</p>
                </div>
              </div>
              <p className="text-base text-[#aaaaaaff] cursor-pointer">View</p>
            </div>
          )}
          {tabActive === 3 && (
            <div className="">
              <div className="flex flex-col gap-4">
                {Array.from({ length: 7 }).map((item, index) => (
                  <div
                    className="flex flex-row items-center justify-between border-b border-[#2C2C2C] pb-4"
                    key={index}
                  >
                    <div className="flex flex-row gap-[30px]">
                      <ExportedImage
                        src={LogoIcon}
                        alt="logo icon"
                        className="rounded-full w-[48px] h-[48px]"
                      />
                      <div className="text-white flex flex-col gap-1 text-base">
                        <p className="font-semibold">Flash 3.0 Fairlaunch</p>
                        <p className="font-semibold">Flash</p>
                      </div>
                    </div>
                    <p className="text-base text-[#aaaaaaff] cursor-pointer">
                      View
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-[30px] flex flex-row gap-[11.2px] justify-end max-sm:hidden">
                <div className="w-[28px] h-[28px] bg-[#282828] rounded-[5.6px] flex flex-row justify-center items-center">
                  <ExportedImage src={PageLeftIcon} alt="page" />
                </div>
                <div className="w-[28px] h-[28px] bg-[#aaaaaaff] rounded-[5.6px] flex flex-row justify-center items-center">
                  <p className="text-base text-[#16171B]">1</p>
                </div>
                <div className="w-[28px] h-[28px] bg-[#282828] rounded-[5.6px] flex flex-row justify-center items-center">
                  <p className="text-base text-[#86888C]">2</p>
                </div>
                <div className="w-[28px] h-[28px] bg-[#282828] rounded-[5.6px] flex flex-row justify-center items-center">
                  <p className="text-base text-[#86888C]">3</p>
                </div>
                <div className="w-[28px] h-[28px] bg-[#282828] rounded-[5.6px] flex flex-row justify-center items-center">
                  <p className="text-base text-[#86888C]">4</p>
                </div>
                <div className="w-[28px] h-[28px] bg-[#282828] rounded-[5.6px] flex flex-row justify-center items-center">
                  <ExportedImage src={PageRightActive} alt="page" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* {(tabActive === 0 || tabActive === 1) && (
        <div className="mt-[157px] max-sm:mt-8 pb-5 flex flex-row justify-center">
          <p className="text-center text-lg max-sm:text-sm text-white w-[1155px]">
            Disclaimer: Flashlaunch will never endorse or encourage that you
            invest in any of the projects listed and therefore, accept no
            liability for any loss occasioned. It is the users responsibility to
            do their own research and seek financial advice from a professional.
            More information about (DOR) can be found via{" "}
            <span className="text-[#aaaaaaff]">Binance Academy</span>.
          </p>
        </div>
      )} */}

      {tabActive === 3 && (
        <div className="mt-[30px] flex flex-row gap-[11.2px] justify-center">
          <div className="w-[28px] h-[28px] bg-[#282828] rounded-[5.6px] flex flex-row justify-center items-center">
            <ExportedImage src={PageLeftIcon} alt="page" />
          </div>
          <div className="w-[28px] h-[28px] bg-[#aaaaaaff] rounded-[5.6px] flex flex-row justify-center items-center">
            <p className="text-base text-[#16171B]">1</p>
          </div>
          <div className="w-[28px] h-[28px] bg-[#282828] rounded-[5.6px] flex flex-row justify-center items-center">
            <p className="text-base text-[#86888C]">2</p>
          </div>
          <div className="w-[28px] h-[28px] bg-[#282828] rounded-[5.6px] flex flex-row justify-center items-center">
            <p className="text-base text-[#86888C]">3</p>
          </div>
          <div className="w-[28px] h-[28px] bg-[#282828] rounded-[5.6px] flex flex-row justify-center items-center">
            <p className="text-base text-[#86888C]">4</p>
          </div>
          <div className="w-[28px] h-[28px] bg-[#282828] rounded-[5.6px] flex flex-row justify-center items-center">
            <ExportedImage src={PageRightActive} alt="page" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
