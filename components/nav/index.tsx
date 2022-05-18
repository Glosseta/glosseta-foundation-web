import React from "react";
import { chakra, Flex, HStack, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

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
      </Flex>
    </chakra.nav>
  );
}
