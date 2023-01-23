import React from "react";

import { Stack, Img, Text, Button } from "components";

const DesktopTwoPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-roboto items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-white_A700 flex flex-col items-center justify-start max-w-[1433px] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
          <div className="flex flex-col items-center justify-start w-[100%]">
            <Stack className="h-[1024px] relative w-[100%]">
              <Img
                src="images/img_originalphotor.png"
                className="h-[1024px] m-[auto] object-cover w-[100%]"
                alt="originalPhotoR"
              />
              <div className="absolute flex flex-col inset-x-[0] justify-start mx-[auto] top-[4%] w-[96%]">
                <header className="flex items-center justify-center w-[100%]">
                  <div className="flex flex-col items-center justify-center w-[100%]">
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
                      <li className="mt-[9px] ml-[273px] sm:w-[100%] sm:my-[10px] w-[12%]">
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
                      <li className="mt-[9px] mb-[117px] ml-[87px] sm:w-[100%] sm:my-[10px] w-[13%]">
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
                  </div>
                </header>
                <Img
                  src="images/img_divider.svg"
                  className="h-[133px] md:ml-[0] sm:ml-[0] ml-[123px] mt-[52px] w-[480px]"
                  alt="Divider"
                />
                <div className="flex sm:flex-col flex-row font-ubuntu sm:gap-[40px] gap-[90px] items-start justify-start mt-[127px] md:w-[100%] sm:w-[100%] w-[48%]">
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-[50px] sm:mt-[0] mt-[8px] w-[49px]"
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
                <Button className="cursor-pointer font-normal leading-[normal] min-w-[24%] md:ml-[0] sm:ml-[0] ml-[139px] mr-[908px] mt-[37px] not-italic text-[18px] text-center text-white_A700 w-[max-content]">
                  Essayer Créativ’IA
                </Button>
                <div className="flex flex-row font-roboto md:gap-[40px] sm:gap-[40px] gap-[908px] items-start justify-end ml-[auto] mt-[14px] md:w-[100%] sm:w-[100%] w-[87%]">
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[18%] not-italic text-[18px] text-black_900 text-center w-[max-content]"
                    variant="OutlineBlack900"
                  >
                    En savoir plus...
                  </Button>
                  <Text
                    className="mt-[33px] text-left text-white_A700 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    01
                  </Text>
                </div>
              </div>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;
