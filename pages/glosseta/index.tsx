import React from "react";
import PageLayout from "../../components/layouts";
import ContentCard from "../../components/content/content-card";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const GlossetaPage = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <PageLayout>
      <ContentCard
        title={t("glossetaPageTitle")}
        content={t("glossetaContent")}
      />
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
