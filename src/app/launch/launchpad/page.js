"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";

//! import components
import Input from "@/components/Form/Input";
import DefaultSelect from "@/components/Form/DefaultSelect";
import Warning from "@/components/Alert/Warning";

//! import Icons
import LogoURLIcon from "@/assets/icons/logoURL-input.svg";
import WebsiteIcon from "@/assets/icons/website-input.svg";
import TwitterIcon from "@/assets/icons/twitter-input.svg";
import FacebookIcon from "@/assets/icons/facebook-input.svg";
import GithubIcon from "@/assets/icons/github-input.svg";
import TelegramIcon from "@/assets/icons/telegram-input.svg";
import InstagramIcon from "@/assets/icons/instagram-input.svg";
import DiscordIcon from "@/assets/icons/discord-input.svg";
import RedditIcon from "@/assets/icons/reddit-input.svg";
import YoutubeIcon from "@/assets/icons/youtube-input.svg";
import WarningIcon from "@/assets/icons/warning.svg";
import DatePickerIcon from "@/assets/icons/datepicker.svg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ExportedImage from "next-image-export-optimizer";
import { useRouter } from "next/navigation";

const Launchpad = () => {
  const [step, setStep] = useState(1);
  const [startDate, setStartDate] = useState(null);

  const router = useRouter();

  return (
    <div className="min-h-[1500px] pb-5">
      <div className="bg-[#000000ff] rounded-2xl p-8 flex flex-row max-sm:hidden">
        <div className="flex flex-col min-w-[328px] relative">
          <p className="text-sm text-[#aaaaaaff]">Step 1</p>
          <p className="text-lg text-white font-semibold mt-5">Approve Token</p>
          <p className="text-sm text-[#86888C] mt-4">
            Enter the token address <br /> and approve
          </p>
          {step === 1 && (
            <hr className="h-0.5 border-0 bg-[#aaaaaaff] w-[328px] absolute -top-8 left-0"></hr>
          )}
        </div>

        <div className="flex flex-col min-w-[328px] relative">
          <p className="text-sm text-[#aaaaaaff]">Step 2</p>
          <p className="text-lg text-white font-semibold mt-5">
            Launchpad Information
          </p>
          <p className="text-sm text-[#86888C] mt-4">
            Enter the Fair Launch information, in <br /> case of trouble check
            our <span className="text-[#aaaaaaff]">Docs</span>
          </p>

          {step === 2 && (
            <hr className="h-0.5 border-0 bg-[#aaaaaaff] w-[328px] absolute -top-8 left-0"></hr>
          )}
        </div>

        <div className="flex flex-col min-w-[328px] relative">
          <p className="text-sm text-[#aaaaaaff]">Step 3</p>
          <p className="text-lg text-white font-semibold mt-5">
            Project Information
          </p>
          <p className="text-sm text-[#86888C] mt-4">
            Add project links, <br /> description and select tier
          </p>

          {step === 3 && (
            <hr className="h-0.5 border-0 bg-[#aaaaaaff] w-[328px] absolute -top-8 left-0"></hr>
          )}
        </div>

        <div className="flex flex-col min-w-[328px] relative">
          <p className="text-sm text-[#aaaaaaff]">Step 4</p>
          <p className="text-lg text-white font-semibold mt-5">Submit</p>
          <p className="text-sm text-[#86888C] mt-4">Submit your presale</p>

          {step === 4 && (
            <hr className="h-0.5 border-0 bg-[#aaaaaaff] w-[328px] absolute -top-8 left-0"></hr>
          )}
        </div>
      </div>

      <div className="bg-[#000000ff] rounded-2xl p-5 flex-col gap-[50px] max-sm:flex hidden">
        <div className="flex flex-row gap-4">
          <div
            className={`w-[42px] h-[42px] rounded-full flex flex-row items-center justify-center text-base text-[black] font-extrabold ${
              step > 1 || step === 1
                ? "bg-[#aaaaaaff] text-[black]"
                : "bg-[#86888C] text-[black]"
            }`}
          >
            1
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-[#aaaaaaff] font-medium">Step 1</p>
            <p className="text-sm text-[white]/[0.85] font-semibold mt-3">
              Approve Token
            </p>
            <p className="text-xs text-[white]/[0.45] font-normal mt-[6px]">
              Enter the token address and approve
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <div
            className={`w-[42px] h-[42px] rounded-full flex flex-row items-center justify-center text-base font-extrabold ${
              step > 2 || step === 2
                ? "bg-[#aaaaaaff] text-[black]"
                : "bg-[#86888C] text-[black]"
            }`}
          >
            2
          </div>
          <div className="flex flex-col max-w-[235px]">
            <p className="text-xs text-[#aaaaaaff] font-medium">Step 2</p>
            <p className="text-sm text-[white]/[0.85] font-semibold mt-3">
              Launchpad Information
            </p>
            <p className="text-xs text-[white]/[0.45] font-normal mt-[6px]">
              Enter the Fair Launch information, in case of trouble check our
              <span className="text-[#aaaaaaff]"> Docs</span>
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <div
            className={`w-[42px] h-[42px] rounded-full flex flex-row items-center justify-center text-base font-extrabold ${
              step > 3 || step === 3
                ? "bg-[#aaaaaaff] text-[black]"
                : "bg-[#86888C] text-[black]"
            }`}
          >
            3
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-[#aaaaaaff] font-medium">Step 3</p>
            <p className="text-sm text-[white]/[0.85] font-semibold mt-3">
              Project Information
            </p>
            <p className="text-xs text-[white]/[0.45] font-normal mt-[6px]">
              Add project links, description and select tier
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <div
            className={`w-[42px] h-[42px] rounded-full flex flex-row items-center justify-center text-base  font-extrabold ${
              step > 4 || step === 4
                ? "bg-[#aaaaaaff] text-[black]"
                : "bg-[#86888C] text-[black]"
            }`}
          >
            4
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-[#aaaaaaff] font-medium">Step 4</p>
            <p className="text-sm text-[white]/[0.85] font-semibold mt-3">
              Submit
            </p>
            <p className="text-xs text-[white]/[0.45] font-normal mt-[6px]">
              Submit your presale
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#000000ff] rounded-2xl p-8 mt-6 max-sm:p-5">
        {step === 1 && (
          <div className="flex flex-col gap-8">
            <div className="flex flex-row justify-between max-sm:flex-col-reverse max-sm:gap-6">
              <p className="text-xs text-[#FBBF04]">(*) is required field.</p>
              <button
                className="py-[10px] px-[61px] bg-[#FBBF04] rounded-[10px] text-sm text-[#151103] font-semibold"
                onClick={() => {
                  router.push("/launch/create-token");
                }}
              >
                Create Token
              </button>
            </div>

            <Input
              label="Token Address"
              required={true}
              placeholder="Token Address"
            />

            <div className="flex flex-col gap-5">
              <p className="text-sm text-[#FBBF04]">Pool Creation fee: 1 BNB</p>
              <div className="flex flex-col gap-3">
                <p className="text-sm text-white">Currency</p>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center">
                    <input
                      type="radio"
                      name="currency"
                      checked={true}
                      onChange={() => console.log()}
                    />
                    <p className="text-sm text-[#BCBBB9]">BNB</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <input type="radio" name="currency" />
                    <p className="text-sm text-[#BCBBB9]">USDT</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <input type="radio" name="currency" />
                    <p className="text-sm text-[#BCBBB9]">USDC</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <input type="radio" name="currency" />
                    <p className="text-sm text-[#BCBBB9]">DAI</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <input type="radio" name="currency" />
                    <p className="text-sm text-[#BCBBB9]">FLOKI</p>
                  </div>
                  <p className="text-sm text-[#FBBF04]">
                    Users will pay with BNB for your token
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-sm text-white">Fee options</p>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center">
                    <input
                      type="radio"
                      name="fee"
                      checked={true}
                      onChange={() => console.log()}
                    />
                    <p className="text-sm text-[#BCBBB9]">
                      3.5% BNB raised only{" "}
                      <span className="text-[#aaaaaaff]">(Recommended)</span>
                    </p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <input type="radio" name="fee" />
                    <p className="text-sm text-[#BCBBB9]">
                      1.5% BNB raised + 1.5% token sold
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-sm text-white">Listing Options</p>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center">
                    <input
                      type="radio"
                      name="listing"
                      checked={true}
                      onChange={() => console.log()}
                    />
                    <p className="text-sm text-[#BCBBB9]">Auto Listing</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-sm text-white">Affiliate Program</p>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center">
                    <input
                      type="radio"
                      name="affiliate"
                      checked={true}
                      onChange={() => console.log()}
                    />
                    <p className="text-sm text-[#BCBBB9]">Disable Affiliate</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <input type="radio" name="currency" />
                    <p className="text-sm text-[#BCBBB9]">Enable Affiliate</p>
                  </div>
                </div>
              </div>

              <Warning icon={false}>
                <p className="text-sm text-[#FFF7CD]">
                  Auto listing, after you finalize the pool your token will be
                  auto listed on DEX.
                </p>
              </Warning>
            </div>

            <div className="flex flex-row justify-end">
              <button
                className="bg-[#FBBF04] max-sm:w-[100%] rounded-[10px] py-[10px] px-[61px] text-sm font-semibold text-[#151103]"
                onClick={() => setStep(2)}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col gap-7">
            <p className="text-xs text-[#FBBF04]">(*) is required field.</p>
            <div className="flex flex-col gap-2">
              <Input label="Presale rate" placeholder="0" required={true} />
              <p className="text-xs text-[#aaaaaaff]">
                If I spend 1 how many tokens will I receive?
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-white">Whitelist</p>
              <div className="flex flex-row gap-4 text-sm text-white">
                <div className="flex flex-row gap-2 items-center">
                  <input
                    type="radio"
                    name="whitelist"
                    id=""
                    checked
                    onChange={""}
                  />
                  <p>Disable</p>
                </div>

                <div className="flex flex-row gap-2 items-center">
                  <input type="radio" name="whitelist" id="" />
                  <p>Enable</p>
                </div>
              </div>
              <p className="text-xs text-[#aaaaaaff]">
                You can enable/disable whitelist anytime (If you activate the
                whitelist our members who use the floki whitelist function can
                access your whitelist)
              </p>
            </div>

            <div className="flex flex-row gap-6 max-sm:flex-col">
              <div className="flex flex-col gap-2 w-[100%]">
                <Input label="SoftCap (BNB)" placeholder="0" required={true} />
                <p className="text-xs text-[#aaaaaaff]">
                  Softcap must be ≥ 25% of Hardcap!
                </p>
              </div>

              <div className="flex flex-col gap-2 w-[100%]">
                <Input label="HardCap (BNB)" placeholder="0" required={true} />
                <p className="text-xs text-[#aaaaaaff]">
                  HardCap must be positive number
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-6 max-sm:flex-col">
              <div className="flex flex-col gap-2 w-[100%]">
                <Input
                  label="Minimum buy (BNB)"
                  placeholder="0"
                  required={true}
                />
                <p className="text-xs text-[#aaaaaaff]">
                  Minimum buy must be positive number
                </p>
              </div>

              <div className="flex flex-col gap-2 w-[100%]">
                <Input
                  label="Maximum buy (BNB)"
                  placeholder="0"
                  required={true}
                />
                <p className="text-xs text-[#aaaaaaff]">
                  Maximum buy must be positive number
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-6 max-sm:flex-col">
              <div className="flex flex-col gap-2 w-[100%]">
                <DefaultSelect
                  label="Refund type"
                  optons={[{ text: "Burn", value: "1" }]}
                  required={true}
                />
              </div>

              <div className="flex flex-col gap-2 w-[100%]">
                <DefaultSelect
                  label="Router"
                  optons={[
                    { text: "---Select Router Exchange---", value: "1" },
                  ]}
                  required={true}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-6 max-sm:flex-col">
                <div className="flex flex-col gap-2 w-[100%] ">
                  <Input
                    label="Minimum buy (BNB)"
                    placeholder="0"
                    required={true}
                  />
                  <p className="text-xs text-[#aaaaaaff]">
                    Liquidity must be greater than 50%
                  </p>
                </div>

                <div className="flex flex-col gap-2 w-[100%]">
                  <Input
                    label="Maximum buy (BNB)"
                    placeholder="0"
                    required={true}
                  />
                  <p className="text-xs text-[#aaaaaaff]">1 BNB = 0 FLASH</p>
                </div>
              </div>
              <p className="text-xs text-[#aaaaaaff]">
                Enter the percentage of raised funds that should be allocated to
                Liquidity on (Min 51%, Max 100%) <br />
                If I spend 1 on how many tokens will I receive? Usually this
                amount is lower than presale rate to allow for a higher listing
                price on
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-white">
                Select start time & end time (UTC)
              </p>

              <div className="flex flex-row gap-6 max-sm:flex-col">
                <div className="flex flex-col gap-2 w-[100%]">
                  <p className="text-white text-[14px]">Start time (UTC)</p>
                  <div className="flex flex-col relative">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      dateFormat="MM/d/yyyy hh:mm aa"
                      placeholderText="Select date"
                      className="bg-[#141414] outline-none border w-[100%] border-[#2C2C2C] h-[59px] p-5 rounded-lg text-base text-[#86888C]"
                    />
                    <ExportedImage
                      src={DatePickerIcon}
                      alt="image"
                      className="absolute top-4 right-5"
                    />
                  </div>
                  <p className="text-xs text-[#aaaaaaff]">
                    The duration between start time and end time must be less
                    than 10080 minutes
                  </p>
                </div>

                <div className="flex flex-col gap-2 w-[100%]">
                  <p className="text-white text-[14px]">End time (UTC)</p>
                  <div className="flex flex-col relative">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      dateFormat="MM/d/yyyy hh:mm aa"
                      placeholderText="Select date"
                      className="bg-[#141414] outline-none border w-[100%] border-[#2C2C2C] h-[59px] p-5 rounded-lg text-base text-[#86888C]"
                    />
                    <ExportedImage
                      src={DatePickerIcon}
                      alt="image"
                      className="absolute top-4 right-5"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-[100%]">
              <Input
                label="Liquidity lockup (days)"
                placeholder="0"
                required={true}
              />
              <p className="text-xs text-[#aaaaaaff]">
                liquidityLockTime must be greater than or equal to 30
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-right text-sm text-[#aaaaaaff] max-sm:text-center">
                Need 0 FLASH to create launchpad.
              </p>
              <div className="flex flex-row justify-end gap-5">
                <button
                  className="px-12 py-[10px] text-sm text-[#FBBF04] rounded-[10px] font-semibold border border-[#FBBF04]"
                  onClick={() => setStep(1)}
                >
                  Previous
                </button>

                <button
                  onClick={() => setStep(3)}
                  className="px-12 py-[10px] text-sm text-[#151103] font-semibold rounded-[10px] bg-[#FBBF04]"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col gap-7">
            <p className="text-xs text-[#FBBF04]">(*) is required field.</p>
            <div className="flex flex-row gap-6 max-sm:flex-col">
              <div className="flex flex-col w-[100%]">
                <Input
                  label="Logo URL"
                  required={true}
                  placeholder="Ex: https://..."
                  icon={LogoURLIcon}
                />
                <p className="text-xs text-[#aaaaaaff] mt-[6px]">
                  URL must end with a supported image extension png, jpg, jpeg
                  or gif. You can upload your image at
                  <br />
                  https://upload.flashlaunch.com/
                </p>
              </div>

              <div className="flex flex-col w-[100%]">
                <Input
                  label="Website"
                  required={true}
                  placeholder="Ex: https://..."
                  icon={WebsiteIcon}
                />
              </div>
            </div>
            <div className="flex flex-row gap-6 max-sm:flex-col">
              <div className="flex flex-col w-[100%]">
                <Input
                  label="Facebook"
                  placeholder="Ex: https://facebook.com/..."
                  icon={FacebookIcon}
                />
              </div>

              <div className="flex flex-col w-[100%]">
                <Input
                  label="Twitter"
                  placeholder="Ex: https://twitter.com/..."
                  icon={TwitterIcon}
                />
              </div>
            </div>
            <div className="flex flex-row gap-6 max-sm:flex-col">
              <div className="flex flex-col w-[100%]">
                <Input
                  label="Github"
                  placeholder="Ex: https://github.com/..."
                  icon={GithubIcon}
                />
              </div>

              <div className="flex flex-col w-[100%]">
                <Input
                  label="Telegram"
                  placeholder="Ex: https://t.me/..."
                  icon={TelegramIcon}
                />
              </div>
            </div>
            <div className="flex flex-row gap-6 max-sm:flex-col">
              <div className="flex flex-col w-[100%]">
                <Input
                  label="Instagram"
                  placeholder="Ex: https://instagram.com/..."
                  icon={InstagramIcon}
                />
              </div>

              <div className="flex flex-col w-[100%]">
                <Input
                  label="Discord"
                  placeholder="Ex: https://t.me/..."
                  icon={DiscordIcon}
                />
              </div>
            </div>
            <div className="flex flex-col w-[100%]">
              <Input
                label="Reddit"
                placeholder="Ex: https://reddit.com/..."
                icon={RedditIcon}
              />
            </div>

            <div className="flex flex-col w-[100%]">
              <Input
                label="Youtube Video"
                placeholder="Ex: https://youtube.com/watch?v="
                icon={YoutubeIcon}
              />
            </div>
            <p className="text-xs text-[#aaaaaaff]">
              Input your youtube URL, or youtube video ID.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-white">Description</p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Ex: This project is..."
                className="bg-[#141414] rounded-[6px] border border-[#2C2C2C] py-[10px] px-4 outline-none"
              ></textarea>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-row justify-end gap-5">
                <button
                  className="px-12 py-[10px] text-sm text-[#FBBF04] rounded-[10px] font-semibold border border-[#FBBF04]"
                  onClick={() => setStep(2)}
                >
                  Previous
                </button>

                <button
                  className="px-12 py-[10px] text-sm text-[#151103] font-semibold rounded-[10px] bg-[#FBBF04]"
                  onClick={() => setStep(4)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Total token</p>
                <p className="text-[#aaaaaaff]">100,290.7 FLASH</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Token name</p>
                <p>Flash 3.0</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Token symbol</p>
                <p>Flash</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Token decimals</p>
                <p>18</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Presale rate</p>
                <p>1000 FLASH</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Sale method</p>
                <p>Public</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Softcap</p>
                <p>25</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Hardcap</p>
                <p>100</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Unsold tokens</p>
                <p>Burn</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Minimum buy</p>
                <p>5 BNB</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Maximum buy</p>
                <p>10 BNB</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Liquidity</p>
                <p>51%</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Start time</p>
                <p>2023-08-30T20:31 (UTC)</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>End time</p>
                <p>2023-09-14T20:31 (UTC)</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Liquidity lockup time</p>
                <p>365 days</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Website</p>
                <p className="text-[#aaaaaaff]">flash-technologies.org</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Facebook</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Telegram</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Using Team Vesting?</p>
                <p>No</p>
              </div>
            </div>

            <div className="p-[17px] max-sm:p-[10px] flex flex-row items-center gap-6 max-sm:gap-2 border border-[#262626] bg-[#141414] rounded-[6px] mt-[50px]">
              <ExportedImage src={WarningIcon} alt="Warning" />
              <p className="text-sm text-white max-sm:text-xs break-words max-sm:w-[245px]">
                Please exclude Flash Factory address
                0x7461B2F388142a7584ac752e637B255Eead9bcPL from fees, rewards,
                max tx amount to start creating pools
              </p>
            </div>

            <div className="p-[17px] flex flex-row items-center gap-6 border border-[#262626] bg-[#141414] rounded-[6px] mt-[10px]">
              <p className="text-xs text-white">
                For tokens with burns, rebase or other special transfers please
                ensure that you have a way to whitelist multiple addresses or
                turn off the special transfer events (By setting fees to 0 for
                example for the duration of the presale)
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-3">
              <div className="flex flex-row justify-end gap-5">
                <button
                  className="px-12 py-[10px] text-sm text-[#FBBF04] rounded-[10px] font-semibold border border-[#FBBF04]"
                  onClick={() => setStep(2)}
                >
                  Previous
                </button>

                <button
                  className="px-12 py-[10px] text-sm text-[#151103] font-semibold rounded-[10px] bg-[#FBBF04]"
                  onClick={() => setStep(4)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Launchpad;
