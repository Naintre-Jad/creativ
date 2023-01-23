import React from "react";

import { Stack, Text, Img, Line, Input, Button } from "components";

const PageFive = () => {
  function handleNavigate() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white_A700 flex flex-col font-roboto gap-[31px] items-start justify-end mx-[auto] p-[22px] sm:px-[20px] w-[100%]"
        style={{ backgroundImage: "url('images/img_pagethree.png')" }}
      >
        <div className="flex flex-col items-center max-w-[1366px] md:ml-[0] sm:ml-[0] ml-[auto] mr-[auto] mt-[17px] md:pl-[20px] md:pr-[20px] w-[100%]">
          <Stack className="h-[880px] relative w-[100%]">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
              <div className="flex flex-col gap-[264px] md:gap-[40px] sm:gap-[40px] items-start justify-start w-[100%]">
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-end pl-[7px] w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="text-left text-white_A700_b2 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Créativ’IA
                    </Text>
                  </div>
                  <div className="flex flex-col font-inter h-[147px] md:h-[auto] sm:h-[auto] items-start justify-start md:ml-[0] sm:ml-[0] ml-[273px] md:mt-[0] sm:mt-[0] mt-[9px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      <span className="text-white_A700_b2 text-[20px] font-roboto">
                        EN SAVOIR PLUS{" "}
                      </span>
                      <span className="text-white_A700_b2 text-[11px] font-roboto">
                        ▼
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col font-roboto items-start justify-start md:ml-[0] sm:ml-[0] ml-[87px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      DÉMONSTRATION
                    </Text>
                  </div>
                  <div className="flex flex-col font-roboto items-start justify-start md:ml-[0] sm:ml-[0] ml-[82px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      F.A.Q
                    </Text>
                  </div>
                  <div className="flex flex-col font-roboto items-start justify-start md:ml-[0] sm:ml-[0] ml-[84px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      CONTACTEZ NOUS
                    </Text>
                  </div>
                  <div className="bg-bluegray_100_6b border border-solid border-white_A700 h-[48px] mb-[108px] md:ml-[0] sm:ml-[0] ml-[97px] rounded-radius50 w-[48px]"></div>
                </div>
                <Img
                  src="images/img_boutonsnav.svg"
                  className="h-[105px] w-[50px]"
                  alt="Boutonsnav"
                />
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col items-start justify-start left-[8%] p-[24px] sm:px-[20px] w-[52%]">
              <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] sm:w-[100%] w-[75%]">
                <Text
                  className="font-normal not-italic text-black_900 text-left w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Contact
                </Text>
                <Line className="bg-black_900 h-[1px] shadow-bs w-[100%]" />
              </div>
              <Text
                className="leading-[150.00%] mt-[18px] sm:mx-[0] text-black_900 text-left sm:w-[100%] w-[91%]"
                as="h4"
                variant="h4"
              >
                N'hésitez pas à nous contacter pour des conseils ou de l'aide
              </Text>
              <Stack className="font-montserrat h-[59px] md:ml-[0] sm:ml-[0] ml-[3px] mt-[62px] relative sm:w-[100%] w-[90%]">
                <div className="absolute flex flex-col gap-[12px] h-[35px] md:h-[auto] sm:h-[auto] inset-x-[0] items-start justify-start mx-[auto] top-[0] sm:w-[100%] w-[583px]">
                  <Text
                    className="self-stretch text-gray_600 text-left w-[auto]"
                    variant="body1"
                  >
                    Nom
                  </Text>
                  <Line className="bg-gray_300 h-[1px] self-stretch w-[100%]" />
                </div>
                <Input
                  className="absolute bottom-[0] font-normal italic left-[0] sm:mx-[0] p-[0] text-[16px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                  wrapClassName="absolute w-[310px]"
                  name="FrameEightySeven"
                  placeholder="Entrez votre nom..."
                ></Input>
              </Stack>
              <Stack className="font-montserrat h-[59px] md:ml-[0] sm:ml-[0] ml-[3px] mt-[20px] relative sm:w-[100%] w-[90%]">
                <Input
                  className="absolute font-medium inset-x-[0] leading-[normal] mx-[auto] p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left top-[0] w-[100%]"
                  wrapClassName="absolute md:h-[auto] sm:h-[auto] sm:w-[100%] w-[583px]"
                  type="email"
                  name="language"
                  placeholder="Email "
                  size="md"
                  variant="UnderLineGray300"
                ></Input>
                <Input
                  className="absolute bottom-[0] font-normal italic left-[0] sm:mx-[0] p-[0] text-[16px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                  wrapClassName="absolute w-[310px]"
                  type="email"
                  name="FrameEightyEight"
                  placeholder="Entrez votre email..."
                ></Input>
              </Stack>
              <Stack className="font-montserrat h-[54px] md:ml-[0] sm:ml-[0] ml-[3px] mt-[24px] relative sm:w-[100%] w-[90%]">
                <Input
                  className="absolute bottom-[0] font-normal italic left-[0] sm:mx-[0] p-[0] text-[16px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                  wrapClassName="absolute w-[310px]"
                  name="FrameEightyNine"
                  placeholder="Entrez votre numéro..."
                ></Input>
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[auto]">
                  <div className="flex flex-col items-start justify-start sm:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[12px] items-start justify-start sm:w-[100%] w-[583px]">
                      <Text
                        className="self-stretch text-gray_600 text-left w-[auto]"
                        variant="body1"
                      >
                        Numéro de téléphone
                      </Text>
                      <Line className="bg-gray_300 h-[1px] self-stretch w-[100%]" />
                    </div>
                  </div>
                </div>
              </Stack>
              <div className="flex flex-col font-montserrat items-start justify-start mt-[15px] md:w-[100%] sm:w-[100%] w-[84%]">
                <Text
                  className="md:ml-[0] sm:ml-[0] ml-[3px] text-gray_600 text-left w-[auto]"
                  variant="body1"
                >
                  Message
                </Text>
                <div className="bg-white_A700_33 border border-gray_300 border-solid flex flex-col h-[164px] md:h-[auto] sm:h-[auto] items-start justify-start pl-[16px] pr-[8px] py-[14px] rounded-radius4 sm:w-[100%] w-[546px]">
                  <Text
                    className="italic text-gray_600 text-left w-[auto]"
                    variant="body2"
                  >
                    Entrez votre message...
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-normal leading-[normal] mb-[11px] min-w-[31%] md:ml-[0] sm:ml-[0] ml-[3px] mt-[30px] not-italic text-[18px] text-black_900 text-center w-[max-content]"
                variant="OutlineBlack900"
              >
                Envoyer
              </Button>
            </div>
          </Stack>
        </div>
        <div className="flex flex-row gap-[22px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[14px] mr-[auto] md:pl-[20px] md:pr-[20px] md:w-[100%] sm:w-[100%] w-[19%]">
          <Img
            src="images/img_twitter.svg"
            className="common-pointer h-[48px] mb-[4px] w-[48px]"
            onClick={handleNavigate}
            alt="twitter"
          />
          <Img
            src="images/img_camera.svg"
            className="h-[48px] mb-[4px] w-[48px]"
            alt="camera"
          />
          <Img
            src="images/img_music.svg"
            className="h-[48px] mb-[4px] w-[48px]"
            alt="music"
          />
          <Img
            src="images/img_contrast.svg"
            className="h-[48px] mt-[4px] w-[48px]"
            alt="contrast"
          />
        </div>
      </div>
    </>
  );
};

export default PageFive;
