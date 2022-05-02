import React from "react";
import { chakra, VStack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const Footer = (): JSX.Element => {
  const {t} = useTranslation();

  return (
    <>
      <chakra.footer isTruncated={false} py={10} color="white">
          <VStack>
              <Text>{t("copyright")}</Text>
          </VStack>
      </chakra.footer>
    </>
  );
};

export default Footer;
