import React from "react";

import { Text, Line, Img } from "components";

const PageThree = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white_A700 flex flex-col font-roboto items-center justify-start mx-[auto] p-[37px] sm:px-[20px] w-[100%]"
        style={{ backgroundImage: "url('images/img_pagethree.png')" }}
      >
        <div className="flex flex-col justify-start max-w-[1365px] mb-[55px] ml-[auto] mr-[auto] mt-[2px] md:pl-[20px] md:pr-[20px] w-[100%]">
          <header className="flex items-center justify-center w-[100%]">
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
          <Text
            className="font-normal md:ml-[0] sm:ml-[0] ml-[139px] mt-[35px] not-italic text-black_900 text-left w-[auto]"
            as="h2"
            variant="h2"
          >
            Conseils d’utilisation{" "}
          </Text>
          <Line className="bg-black_900 h-[1px] md:ml-[0] sm:ml-[0] ml-[139px] mr-[742px] mt-[17px] shadow-bs w-[36%]" />
          <Text
            className="leading-[150.00%] md:ml-[0] ml-[139px] mt-[6px] sm:mx-[0] text-black_900 text-left sm:w-[100%] w-[44%]"
            as="h4"
            variant="h4"
          >
            Générez des contenus originaux et adaptés à vos besoins en un temps
            record
          </Text>
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[88px] items-start justify-start mt-[73px] md:w-[100%] sm:w-[100%] w-[54%]">
            <Img
              src="images/img_boutonsnav.svg"
              className="h-[105px] md:mt-[0] sm:mt-[0] mt-[29px] w-[50px]"
              alt="Boutonsnav"
            />
            <Text
              className="font-light leading-[150.00%] text-black_900 text-left"
              as="h6"
              variant="h6"
            >
              {`Idéale pour tous les propriétaires de sites web ou de pages de médias sociaux qui cherchent à augmenter leur présence en ligne. Je génère des contenus de qualité en un rien de temps pour divers utilisations, comme les blogs, les pages de médias sociaux, les sites web d'entreprise, les campagnes publicitaires, les courriels marketing et plus encore. `}
              <br />
              <br />
              De plus, notre plateforme vous offre également la possibilité de
              personnaliser le contenu en fonction de vos objectifs marketing
              spécifiques, que ce soit pour générer des leads, augmenter les
              conversions ou améliorer le SEO.
            </Text>
          </div>
          <Text
            className="md:ml-[0] sm:ml-[0] ml-[1254px] mt-[101px] text-left text-white_A700 w-[auto]"
            as="h1"
            variant="h1"
          >
            03
          </Text>
        </div>
      </div>
    </>
  );
};

export default PageThree;
