import React from "react";

import { Text, Stack, Img, Button } from "components";

const LandingPageOnePage = () => {
  return (
    <>
      <div className="bg-white_A700 border border-black_900 border-solid flex flex-col font-roboto items-center justify-start mx-[auto] shadow-bs w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div
            className="bg-cover bg-no-repeat flex flex-col items-start justify-start p-[37px] sm:px-[20px] w-[100%]"
            style={{ backgroundImage: "url('images/img_pagethree.png')" }}
          >
            <header className="flex items-center justify-center max-w-[1365px] ml-[auto] mr-[auto] mt-[2px] md:pl-[20px] md:pr-[20px] w-[100%]">
              <ul className="flex md:flex-col sm:flex-col flex-row md:hidden sm:hidden items-center justify-center pl-[7px] w-[100%] common-row-list">
                <li className="mb-[108px] sm:w-[100%] sm:my-[10px] w-[11%]">
                  <div className="flex flex-col items-start justify-start">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer hover:font-bold font-bold hover:h-[undefinedpx] sm:text-[28px] md:text-[30px] text-[32px] text-left text-white_A700_b2 w-[auto] hover:w-[undefinedpx]"
                      rel="noreferrer"
                    >
                      Créativ’IA
                    </a>
                  </div>
                </li>
                <li className="mt-[9px] ml-[271px] sm:w-[100%] sm:my-[10px] w-[13%]">
                  <div className="flex flex-col font-inter h-[147px] md:h-[auto] sm:h-[auto] items-start justify-start">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer hover:font-bold font-normal hover:h-[undefinedpx] not-italic text-[20px] text-left text-white_A700_b2 w-[auto] hover:w-[undefinedpx]"
                      rel="noreferrer"
                    >
                      EN SAVOIR PLUS ▼
                    </a>
                  </div>
                </li>
                <li className="mt-[9px] mb-[117px] ml-[85px] sm:w-[100%] sm:my-[10px] w-[13%]">
                  <div className="flex flex-col font-roboto items-start justify-start">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer hover:font-bold font-normal hover:h-[undefinedpx] not-italic text-[20px] text-left text-white_A700_b2 w-[auto] hover:w-[undefinedpx]"
                      rel="noreferrer"
                    >
                      DÉMONSTRATION
                    </a>
                  </div>
                </li>
                <li className="mt-[9px] mb-[117px] ml-[82px] sm:w-[100%] sm:my-[10px] w-[4%]">
                  <div className="flex flex-col font-roboto items-start justify-start">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer hover:font-bold font-normal hover:h-[undefinedpx] not-italic text-[20px] text-left text-white_A700_b2 w-[auto] hover:w-[undefinedpx]"
                      rel="noreferrer"
                    >
                      F.A.Q
                    </a>
                  </div>
                </li>
                <li className="mt-[9px] mb-[117px] ml-[84px] sm:w-[100%] sm:my-[10px] w-[13%]">
                  <div className="flex flex-col font-roboto items-start justify-start">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer hover:font-bold font-normal hover:h-[undefinedpx] not-italic text-[20px] text-left text-white_A700_b2 w-[auto] hover:w-[undefinedpx]"
                      rel="noreferrer"
                    >
                      CONTACTEZ NOUS
                    </a>
                  </div>
                </li>
                <li className="mb-[108px] ml-[97px] sm:w-[100%] sm:my-[10px] w-[4%]">
                  <div className="bg-bluegray_100_6b border border-solid border-white_A700 h-[48px] rounded-radius50 w-[48px]"></div>
                </li>
              </ul>
            </header>
            <Stack className="h-[166px] md:ml-[0] sm:ml-[0] ml-[124px] mt-[19px] md:pl-[20px] md:pr-[20px] relative sm:w-[100%] w-[36%]">
              <Img
                src="images/img_divider.svg"
                className="absolute bottom-[0] h-[133px] inset-x-[0] mx-[auto] w-[480px]"
                alt="Divider"
              />
              <Text
                className="absolute font-normal leading-[150.00%] left-[3%] not-italic text-black_900 text-left top-[0]"
                as="h2"
                variant="h2"
              >
                Bonjour,
                <br />
                Je suis Créativ’IA
              </Text>
            </Stack>
            <div className="flex flex-col font-ubuntu gap-[31px] justify-start mt-[9px] md:pl-[20px] md:pr-[20px] md:w-[100%] sm:w-[100%] w-[48%]">
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[92px] items-start justify-start w-[100%]">
                <Img
                  src="images/img_arrowdown_black_900.svg"
                  className="h-[50px] md:mt-[0] sm:mt-[0] mt-[126px] w-[50px]"
                  alt="arrowdown"
                />
                <Text
                  className="font-light leading-[150.00%] text-black_900 text-left"
                  as="h6"
                  variant="h6"
                >
                  <span className="text-black_900 text-[20px] font-roboto">
                    Je suis capable de générer en un temps record des contenus{" "}
                  </span>
                  <span className="text-black_900 text-[20px] font-roboto font-medium">
                    originaux
                  </span>
                  <span className="text-black_900 text-[20px] font-roboto">
                    ,{" "}
                  </span>
                  <span className="text-black_900 text-[20px] font-roboto font-medium">
                    uniques
                  </span>
                  <span className="text-black_900 text-[20px] font-roboto">
                    {" "}
                    et{" "}
                  </span>
                  <span className="text-black_900 text-[20px] font-roboto font-medium">
                    adaptés à vos besoins
                  </span>
                  <span className="text-black_900 text-[20px] font-roboto">
                    {" "}
                    <br />
                    <br />
                    J’utilise des algorithmes avancés pour comprendre les
                    tendances du marché et les préférences de vos clients, ce
                    qui garantit que le contenu généré est pertinent et de
                    qualité supérieure.
                  </span>
                </Text>
              </div>
              <div className="flex flex-col font-roboto gap-[26px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[138px] md:w-[100%] sm:w-[100%] w-[50%]">
                <Button className="cursor-pointer font-normal leading-[normal] not-italic text-[18px] text-center text-white_A700 w-[100%]">
                  Essayer Créativ’IA
                </Button>
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[63%] md:ml-[0] sm:ml-[0] ml-[4px] not-italic text-[18px] text-black_900 text-center w-[max-content]"
                  variant="OutlineBlack900"
                >
                  En savoir plus...
                </Button>
              </div>
            </div>
            <Text
              className="mb-[55px] md:ml-[0] sm:ml-[0] ml-[1254px] mt-[85px] text-left text-white_A700 w-[auto]"
              as="h1"
              variant="h1"
            >
              01
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageOnePage;
