import React from "react";
import {
  chakra,
  VStack,
  Text,
  Link,
  VisuallyHidden,
  Icon,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FaTwitter } from "react-icons/fa";

const Footer = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <chakra.footer isTruncated={false} py={10} color="white">
        <VStack>
          <Text>{t("copyright")}</Text>
        </VStack>
        <VStack>
          <Link
            padding={2}
            href={"https://twitter.com/glossetadotcom"}
            display="flex"
            title="twitter"
            isExternal
          >
            <Icon as={FaTwitter} />
            <VisuallyHidden>{t("TwitterA11yText")}</VisuallyHidden>
          </Link>
        </VStack>
      </chakra.footer>
    </>
  );
};

export default Footer;
