import React from "react";

import { Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const SeconnecterousinscrirePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col font-roboto items-center justify-start mx-[auto] p-[37px] sm:px-[20px] w-[100%]"
        style={{ backgroundImage: "url('images/img_pagethree.png')" }}
      >
        <div className="flex flex-col justify-start max-w-[1365px] mb-[309px] ml-[auto] mr-[auto] mt-[2px] md:pl-[20px] md:pr-[20px] w-[100%]">
          <header className="flex items-center justify-center w-[100%]">
            <ul className="flex md:flex-col sm:flex-col flex-row md:hidden sm:hidden items-center justify-center pl-[7px] w-[100%] common-row-list">
              <li className="mb-[108px] sm:w-[100%] sm:my-[10px] w-[11%]">
                <div
                  className="common-pointer flex flex-col items-start justify-start"
                  onClick={() => navigate("/landingpageone")}
                >
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
                    className="common-pointer cursor-pointer hover:font-bold font-normal hover:h-[undefinedpx] not-italic text-[20px] text-left text-white_A700_b2 w-[auto] hover:w-[undefinedpx]"
                    onClick={() => navigate("/pagetwo")}
                    rel="noreferrer"
                  >
                    EN SAVOIR PLUS ▼
                  </a>
                </div>
              </li>
              <li className="mt-[9px] mb-[117px] ml-[85px] sm:w-[100%] sm:my-[10px] w-[13%]">
                <div
                  className="common-pointer flex flex-col font-roboto items-start justify-start"
                  onClick={() => navigate("/dmonstrationpagefour")}
                >
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
                <div
                  className="common-pointer flex flex-col font-roboto items-start justify-start"
                  onClick={() => navigate("/pagefive")}
                >
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
                <div
                  className="common-pointer bg-bluegray_100_6b border border-solid border-white_A700 h-[48px] rounded-radius50 w-[48px]"
                  onClick={() => navigate("/seconnecteretapetwo")}
                ></div>
              </li>
            </ul>
          </header>
          <Text
            className="font-normal leading-[150.00%] md:ml-[0] ml-[114px] mt-[83px] sm:mx-[0] not-italic text-black_900 text-center sm:w-[100%] w-[43%]"
            as="h2"
            variant="h2"
          >
            L’équipe Créativ’IA vous souhaite la bienvenue !{" "}
          </Text>
          <Text
            className="font-light leading-[150.00%] md:ml-[0] ml-[247px] mt-[46px] sm:mx-[0] text-black_900 text-center sm:w-[100%] w-[24%]"
            as="h6"
            variant="h6"
          >
            Vous devez avoir un compte pour accéder à nos fonctionnalités
          </Text>
          <div className="flex flex-col gap-[12px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[282px] mt-[12px] md:w-[100%] sm:w-[100%] w-[19%]">
            <Button
              className="common-pointer cursor-pointer font-normal leading-[normal] not-italic text-[18px] text-center text-white_A700 w-[100%]"
              onClick={() => navigate("/seconnecteretapetwo")}
            >
              Connexion
            </Button>
            <Button
              className="common-pointer cursor-pointer font-normal leading-[normal] not-italic text-[18px] text-center text-white_A700 w-[100%]"
              onClick={() => navigate("/sinscrireetapetwo")}
            >
              Inscription
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeconnecterousinscrirePage;
