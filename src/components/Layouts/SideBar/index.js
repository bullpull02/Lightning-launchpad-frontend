"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import NavItem from "./NavItem";
import SmallIconOnlyBtn from "../../Button/SmallIconOnlyBtn";

//! import the Image
import logo from "@/assets/image/logo.svg";

import Presales from "@/assets/icons/presales.svg";
import TokenList from "@/assets/icons/token-list.svg";
import Pools from "@/assets/icons/pools.svg";
import Locks from "@/assets/icons/locks.svg";
import Liquidity from "@/assets/icons/liquidity.svg";
import Launch from "@/assets/icons/launch.svg";
import Tools from "@/assets/icons/tools.svg";
import Audit from "@/assets/icons/audit.svg";
import LeaderBoard from "@/assets/icons/leaderboard.svg";

import ActivePresales from "@/assets/icons/active_presales.svg";
import TokenListActive from "@/assets/icons/token-list-active.svg";
import ActivePools from "@/assets/icons/active_pools.svg";
import ActiveLocks from "@/assets/icons/active_locks.svg";
import ActiveLiquidity from "@/assets/icons/active_liquidity.svg";
import ActiveLaunch from "@/assets/icons/active_launch.svg";
import ActiveTools from "@/assets/icons/active_tools.svg";
import ActiveAudit from "@/assets/icons/active_audit.svg";
import LeaderBoardActive from "@/assets/icons/leaderboard-active.svg";

import Sponsored from "@/assets/icons/sponsored.svg";

import Telegram from "@/assets/icons/telegram.svg";
import Twitter from "@/assets/icons/twitter.svg";
import Dark from "@/assets/icons/dark.svg";
import Light from "@/assets/icons/light.svg";

import FlokiBinance from "@/assets/image/floki-binance.png";
import IconBtn from "@/components/Button/IconBtn";

const SideBar = () => {
  const [active, setActive] = useState(1);

  const routerList = [
    {
      text: "Presales",
      img: Presales,
      active_img: ActivePresales,
      path: "/presales",
      active: 1,
    },
    {
      text: "Staking Pools",
      img: Pools,
      active_img: ActivePools,
      path: "/staking-pool",
      active: 2,
    },
    {
      text: "Token Locks List",
      img: TokenList,
      active_img: TokenListActive,
      path: "/token-lock",
      active: 3,
    },
    {
      text: "Liquidity Locks List",
      img: TokenList,
      active_img: TokenListActive,
      path: "/liquidity-lock",
      active: 4,
    },
    {
      text: "Leaderboard",
      img: LeaderBoard,
      active_img: LeaderBoardActive,
      path: "/leaderboard",
      active: 5,
    },
  ];

  const router = useRouter();
  const pathname = usePathname();

  const onNavItemClick = (index) => {
    setActive(index);
    if (index === 1) {
      router.push("/about");
    }
  };

  useEffect(() => {
    routerList.forEach((item) => {
      if (item.path == pathname) {
        setActive(item.active);
      }
    });
  }, [pathname]);
  return (
    <div className="bg-[#1B1B1B] w-[286px] h-auto pb-10 shadow-[4px_0_10px_0_rgba(14,15,20,0.31)] z-10 relative">
      <div className="flex items-center gap-x-2 pl-10 pt-[24.96px]">
        <Image src={logo} alt="logo" />
        <p className="text-[#fff] text-[19.067px] font-bold">Flashpad</p>
      </div>

      <button
        className={`ml-10 mt-[34px] px-6 py-3 flex justify-center items-center gap-2 rounded-[39px] h-[43px] bg-[#FCBF07]`}
      >
        <p className={`text-[#16171B] text-base font-semibold capitalize`}>
          Buy $Flash
        </p>
      </button>

      <div className="mt-[26px]">
        <p className="text-[#86888c] text-[14px] font-semibold uppercase tracking-[1.5px] pl-10">
          EXPLORE
        </p>
        <div className="flex flex-col mt-5 gap-y-2">
          {routerList.map((item, index) => {
            if (index < 5) {
              return (
                <NavItem
                  key={index}
                  text={item.text}
                  img={item.img}
                  active_img={item.active_img}
                  active={active === item.active && true}
                  path={item.path}
                />
              );
            }
          })}
        </div>
        <hr className="h-px w-[206px] mt-5 ml-10 bg-[#2C2C2C] border-0"></hr>
      </div>

      <div className="mt-[28px]">
        <p className="text-[#86888c] text-[14px] font-semibold uppercase tracking-[1.5px] pl-10">
          DEVELOPERS
        </p>
        <div className="flex flex-col mt-5 gap-y-2">
          <NavItem
            text="Create & Launch"
            img={Launch}
            active_img={ActiveLaunch}
            right={true}
            active={active === 6 && true}
            index={6}
            onClick={(index) => setActive(index)}
            childItems={[
              { label: "Launchpad" },
              { label: "Fair Launch" },
              { label: "Token" },
              { label: "Staking Pool" },
              { label: "Create Lock" },
            ]}
          />

          <NavItem
            text="Utility & Tools"
            img={Tools}
            active_img={ActiveTools}
            right={true}
            active={active === 7 && true}
            childItems={[
              { label: "Airdrop" },
              { label: "Create Token" },
              { label: "Swap & Bridge" },
            ]}
          />
          <NavItem
            text="Flash Audit"
            img={Audit}
            active_img={ActiveAudit}
            active={active === 8 && true}
          />
        </div>
      </div>

      <div className="mt-6">
        <NavItem
          text="Sponsorised by Floki"
          img={Sponsored}
          BgClass="bg-[#f79422]"
          TxClass="text-[#fff]"
        />
      </div>

      <div className="mt-10">
        <Image src={FlokiBinance} alt="image" />
        <div className="mt-[113.5px] pl-10 pr-10 grid grid-cols-2 gap-x-5 gap-y-[26.55px]">
          <SmallIconOnlyBtn icon={Telegram} />
          <SmallIconOnlyBtn icon={Twitter} />
          <SmallIconOnlyBtn icon={Light} shadow={false} />
          <SmallIconOnlyBtn icon={Dark} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
