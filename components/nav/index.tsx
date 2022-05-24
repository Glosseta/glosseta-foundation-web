import React from "react";
import {
  chakra,
  Flex,
  HStack,
  Image,
  Button,
  Icon,
  VisuallyHidden,
} from "@chakra-ui/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaBullhorn } from "react-icons/fa";

/**
 * Implementation inspired from the developer dao website
 *
 * source: https://github.com/Developer-DAO/developerdao.com
 *  */
export default function Nav() {
  const { t } = useTranslation();

  return (
    <chakra.nav backgroundColor="#2C3539" minWidth="100vw" title="glosseta-nav">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        maxW="7xl"
        py={3}
        px={3}
      >
        <Link href="/" passHref>
          <HStack
            as="a"
            title={t("glossetaTitle")}
            display="flex"
            alignItems="center"
          >
            <Image
              borderRadius="full"
              boxSize="50px"
              src="/glosseta_icon.png"
              alt="Home button"
              bg="#7a08fc"
              title="nav-glosseta-icon"
            />
          </HStack>
        </Link>

        <Link href={t("mainBannerContentLink")} passHref>
          <HStack as="a" display="flex" alignItems="center" color="white">
            <Icon as={FaBullhorn} />
            <VisuallyHidden>{t("mainBannerA11yText")}</VisuallyHidden>
            <Button backgroundColor={"#7a08fc"} borderRadius="xl">
              {t("mainBannerContent")}
            </Button>
          </HStack>
        </Link>
      </Flex>
    </chakra.nav>
  );
}
