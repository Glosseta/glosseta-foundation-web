import React from "react";
import PageLayout from "../../components/layouts";
import ContentCard from "../../components/content/content-card";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Container, VStack, Image, Button, Link } from "@chakra-ui/react";

const MissionPage = (): JSX.Element => {
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
        title={t("problemAtHandTitle")}
        content={t("whoWeAreProblemAtHandContent")}
      />
      <ContentCard title={t("whoWeAreTitle")} content={t("whoWeAreContent")} />
      <Link href="/glosseta">
        <Button>{t("whatIsGlossetaButton")}</Button>
      </Link>
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

export default MissionPage;
