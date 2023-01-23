import React from "react";
import ModalProvider from "react-modal";

import { Text, Line } from "components";

const DmonstrationpageFourModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[76%]"
        overlayClassName="bg-white_A700 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <div className="bg-white_A700_05 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start max-w-[1089px] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] pr-[15px] md:pr-[20px] sm:pr-[20px] py-[15px] rounded-radius42 w-[100%]">
            <div className="flex flex-col gap-[22px] items-center justify-start max-w-[675px] md:mt-[0] sm:mt-[0] mt-[5px] pb-[22px] sm:px-[20px] md:px-[40px] px-[62px] w-[100%]">
              <Text
                className="text-gray_600 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                CET ARTICLE A ÉTÉ GÉNÉRÉ PAR CRÉATIV’IA
              </Text>
              <div className="bg-white_A700_33 border border-gray_300 border-solid flex flex-col h-[561px] md:h-[auto] sm:h-[auto] items-start justify-start max-w-[631px] pb-[4px] pl-[14px] pr-[8px] pt-[14px] rounded-radius15 w-[100%]">
                <Text
                  className="leading-[24.00px] md:leading-[normal] sm:leading-[normal] not-italic text-bluegray_900 text-left"
                  variant="body3"
                >
                  {`Le monde d'aujourd'hui est en constante évolution et les entreprises doivent être en mesure de s'adapter rapidement pour rester compétitives. Cependant, la création de contenu de qualité peut prendre beaucoup de temps et d'efforts, ce qui peut être un frein pour les entreprises qui cherchent à publier régulièrement du contenu pour leurs clients.`}
                  <br />
                  <br />
                  {`C'est là qu'intervient notre service Cr. Nous offrons une solution pour vous aider à gagner du temps en fournissant des textes qualitatifs générés par l'intelligence artificielle. Avec notre service, vous pouvez vous concentrer sur ce qui est important pour votre entreprise tout en ayant la garantie d'avoir du contenu de qualité pour vos clients.`}
                  <br />
                  <br />
                  Notre service est également facile à utiliser. Il vous suffit
                  de nous fournir des informations sur le sujet que vous
                  souhaitez aborder et notre IA se chargera du reste. Vous
                  pouvez également personnaliser le contenu en fonction de vos
                  besoins spécifiques.
                  <br />
                  <br />
                  {`En utilisant notre service AI Content Co, vous pouvez économiser beaucoup de temps et d'efforts tout en étant assuré d'avoir du contenu de qualité pour vos clients. Nous comprenons que la création de contenu peut être stressante, c'est pourquoi nous voulons vous aider à vous libérer de cette tâche afin que vous puissiez vous concentrer sur ce qui est vraiment important pour votre entreprise.`}
                </Text>
              </div>
            </div>
            <Line className="bg-white_A700 md:h-[1px] sm:h-[1px] h-[636px] md:mt-[0] sm:mt-[0] my-[4px] md:w-[100%] sm:w-[100%] w-[1px]" />
            <div className="flex flex-col h-[377px] md:h-[auto] sm:h-[auto] items-start justify-start md:ml-[0] sm:ml-[0] ml-[179px] px-[14px] w-[auto]">
              <Text
                className="not-italic text-gray_600 text-left w-[auto]"
                variant="body3"
              >
                Liste de paramètres utilisés
              </Text>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default DmonstrationpageFourModal;
