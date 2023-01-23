import React from "react";

import { Text } from "components";
import { useNavigate } from "react-router-dom";

const SeconnecteretapeTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col font-roboto items-center justify-start mx-[auto] p-[24px] sm:px-[20px] w-[100%]"
        style={{ backgroundImage: "url('images/img_seconnecteretape.png')" }}
      >
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-end max-w-[1365px] mb-[787px] ml-[auto] mr-[auto] mt-[33px] md:pl-[20px] pl-[7px] md:pr-[20px] w-[100%]">
          <aside
            className="common-pointer md:hidden sm:hidden w-[auto]"
            onClick={() => navigate("/landingpageone")}
          >
            <div className="flex flex-col items-center justify-start w-[100%]">
              <Text
                className="text-left text-white_A700_b2 w-[auto]"
                as="h3"
                variant="h3"
              >
                Créativ’IA
              </Text>
            </div>
          </aside>
          <div className="flex flex-col font-inter h-[147px] md:h-[auto] sm:h-[auto] items-start justify-start md:ml-[0] sm:ml-[0] ml-[271px] md:mt-[0] sm:mt-[0] mt-[9px] w-[auto]">
            <Text
              className="common-pointer font-normal not-italic text-left text-white_A700_b2 w-[auto]"
              as="h6"
              variant="h6"
              onClick={() => navigate("/pagetwo")}
            >
              <span className="text-white_A700_b2 text-[20px] font-roboto">
                EN SAVOIR PLUS{" "}
              </span>
              <span className="text-white_A700_b2 text-[11px] font-roboto">
                ▼
              </span>
            </Text>
          </div>
          <div
            className="common-pointer flex flex-col font-roboto items-start justify-start md:ml-[0] sm:ml-[0] ml-[85px] w-[auto]"
            onClick={() => navigate("/dmonstrationpagefour")}
          >
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
          <div
            className="common-pointer flex flex-col font-roboto items-start justify-start md:ml-[0] sm:ml-[0] ml-[84px] w-[auto]"
            onClick={() => navigate("/pagefive")}
          >
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
      </div>
    </>
  );
};

export default SeconnecteretapeTwoPage;
