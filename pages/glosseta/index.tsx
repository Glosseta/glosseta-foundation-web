import React from "react";
import PageLayout from "../../components/layouts";
import ContentCard from "../../components/content/content-card";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import {
  Container,
  VStack,
  Image,
  Link,
  Button,
  HStack,
} from "@chakra-ui/react";

const GlossetaPage = (): JSX.Element => {
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
      <ContentCard
        title={t("glossetaPageTitle")}
        content={t("glossetaContent")}
      />
      <ContentCard
        title={t("glossetaPageMissionTitle")}
        content={t("glossetaMissionStatement")}
      />
      <ContentCard
        title={t("glossetaPageSuccessTitle")}
        content={t("glossetaSuccessStatement")}
      />
      <ContentCard
        title={t("glossetaStakeholdersTitle")}
        content={t("glossetaStakeholdersContent")}
      />
      <ContentCard
        title={t("glossetaClosingStatementTitle")}
        content={t("glossetaClosingStatementContent")}
      />
      <HStack spacing={10}>
        <Link href="https://www.glosseta.com" isExternal>
          <Button>{t("visitGlossetaButtonTitle")}</Button>
        </Link>
      </HStack>
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

export default GlossetaPage;
