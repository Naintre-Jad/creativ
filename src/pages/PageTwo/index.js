import React from "react";

import { Img, Text } from "components";

const PageTwo = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-roboto justify-end mx-[auto] shadow-bs w-[100%]">
        <div className="flex flex-col items-end px-[188px] sm:px-[20px] md:px-[40px] w-[100%]">
          <Img
            src="images/img_frame8.png"
            className="h-[2px] sm:h-[auto] max-w-[978px] object-cover rounded-radius1 md:w-[100%] sm:w-[100%] w-[978px]"
            alt="FrameEight"
          />
        </div>
        <div className="flex flex-col items-center w-[100%]">
          <div
            className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[37px] sm:px-[20px] w-[100%]"
            style={{ backgroundImage: "url('images/img_pagethree.png')" }}
          >
            <div className="flex flex-col items-start justify-start max-w-[1365px] mb-[55px] ml-[auto] mr-[auto] mt-[2px] md:pl-[20px] md:pr-[20px] w-[100%]">
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
                className="font-normal md:ml-[0] sm:ml-[0] ml-[138px] mt-[18px] not-italic text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Créativ'IA : à la pointe de la technologie
              </Text>
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[91px] items-start justify-start mt-[75px] md:w-[100%] sm:w-[100%] w-[54%]">
                <Img
                  src="images/img_boutonsnav.svg"
                  className="h-[105px] md:mt-[0] sm:mt-[0] mt-[92px] w-[50px]"
                  alt="Boutonsnav"
                />
                <div className="flex flex-col gap-[8px] justify-start md:w-[100%] sm:w-[100%] w-[81%]">
                  <Img
                    src="images/img_divider.svg"
                    className="h-[20px] md:ml-[0] sm:ml-[0] ml-[8px] w-[481px]"
                    alt="Divider"
                  />
                  <div className="flex flex-col gap-[33px] items-start justify-start w-[100%]">
                    <Text
                      className="leading-[150.00%] text-black_900 text-left w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Explorer les nouvelles frontières de la création
                    </Text>
                    <Text
                      className="font-light leading-[150.00%] text-black_900 text-left"
                      as="h6"
                      variant="h6"
                    >
                      {`Basée sur les dernières avancées en matière d'apprentissage automatique et de traitement du langage naturel. Nous utilisons les techniques les plus avancées pour générer du contenu de qualité supérieure et unique pour votre entreprise. `}
                      <br />
                      <br />
                      {`Nous sommes fiers d'être à la pointe de la technologie dans notre domaine et de pouvoir offrir à nos clients des résultats exceptionnels.`}
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="md:ml-[0] sm:ml-[0] ml-[1253px] mt-[73px] text-left text-white_A700 w-[auto]"
                as="h1"
                variant="h1"
              >
                02
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-inter items-start justify-start md:ml-[0] sm:ml-[0] ml-[202px] mr-[1150px] mt-[4px] p-[10px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[auto]">
          <Text
            className="font-normal not-italic text-black_900 text-left w-[auto]"
            as="h6"
            variant="h6"
          >
            suivant
          </Text>
        </div>
      </div>
    </>
  );
};

export default PageTwo;
