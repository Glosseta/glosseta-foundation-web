import React from "react";
import { chakra, VStack, Text } from "@chakra-ui/react";

const Footer = (): JSX.Element => {
  return (
    <>
      <chakra.footer isTruncated={false} py={10} color="white">
          <VStack>
              <Text>© Glosseta Foundation, 2022</Text>
          </VStack>
      </chakra.footer>
    </>
  );
};

export default Footer;
