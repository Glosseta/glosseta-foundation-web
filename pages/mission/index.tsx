import React from "react";
import PageLayout from "../../components/layouts";
import ContentCard from "../../components/content/content-card";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const MissionPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <ContentCard
        title={t("missionPageTitle")}
        content={t("missionContent")}
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

export default MissionPage;
