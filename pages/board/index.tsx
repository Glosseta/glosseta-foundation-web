import React from "react";
import { Image, VStack, Text, Heading, Container } from "@chakra-ui/react";
import PageLayout from "../../components/layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Directors = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Container>
        <VStack>
          <Image
            src="/glosseta_foundation_logo.jpg"
            alt="Glosseta Foundation Logo"
          />
        </VStack>
      </Container>
      <Heading as="h1" textColor={"white"}>
        {t("boardMemberPageTitle")}
      </Heading>
      <Image
        boxSize="200px"
        borderRadius="full"
        src="https://avatars.githubusercontent.com/u/29411347?v=4"
        alt={t("boardMember1Name")}
      />
      <VStack textColor={"white"}>
        <Heading as="h2" fontSize="xl">
          {t("boardMember1Name")}
        </Heading>
        <Text fontSize="xl">{t("boardMember1Role")}</Text>
      </VStack>
    </PageLayout>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default Directors;
