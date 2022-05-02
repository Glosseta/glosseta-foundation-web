import type { NextPage } from "next";
import PageLayout from "../components/layouts";
import { VStack, chakra, Container, Image } from "@chakra-ui/react";
import PageRedirectCard from "../components/navigation/page-redirect-card";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Home: NextPage = ()  => {
  const {t} = useTranslation();

  return (
    <>
      <PageLayout>
        <Container maxW={{ base: "sm", sm: "xl" }}>
          <chakra.main textColor={"white"}>
            <Container marginBottom={"65px"}>
              <VStack>
                <Image src="/glosseta_foundation_logo.jpg" alt="Glosseta Foundation Logo" />
              </VStack>
            </Container>
            <Container>
              <VStack padding={3}>
                <PageRedirectCard title={t("whoWeAreTitle")} navLink="/mission" />
              </VStack>
              <VStack padding={3}>
                <PageRedirectCard title={t("boardMemberPageTitle")} navLink="/board" />
              </VStack>
              <VStack padding={3}>
                <PageRedirectCard
                  title={t("glossetaPageTitle")}
                  navLink="/glosseta"
                />
              </VStack>
              <VStack padding={3}>
                <PageRedirectCard
                  title={t("visitGlossetaTitle")}
                  navLink="https://www.glosseta.com"
                />
              </VStack>
            </Container>
          </chakra.main>
        </Container>
      </PageLayout>
    </>
  );
};

export async function getStaticProps({ locale }: any) {

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    }
  };
}

export default Home;
