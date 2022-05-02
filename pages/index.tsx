import type { NextPage } from "next";
import PageLayout from "../components/layouts";
import { VStack, chakra, Heading, Container, Image } from "@chakra-ui/react";
import PageRedirectCard from "../components/navigation/page-redirect-card";

const Home: NextPage = () => {
  return (
    <>
      <PageLayout>
        <Container maxW={{ base: "sm", sm: "xl" }}>
          <chakra.main textColor={"white"}>
            <Container marginBottom={"65px"}>
              <VStack>
                <Heading as="h1">Glosseta Foundation</Heading>
              </VStack>
              <VStack>
                <Image src="/glosseta_icon.png" alt="Glosseta G Icon" />
              </VStack>
            </Container>
            <Container>
              <VStack padding={3}>
                <PageRedirectCard title="Our Mission" navLink="/mission" />
              </VStack>
              <VStack padding={3}>
                <PageRedirectCard title="Meet the team" navLink="/board" />
              </VStack>
              <VStack padding={3}>
                <PageRedirectCard
                  title="What is Glosseta?"
                  navLink="/glosseta"
                />
              </VStack>
            </Container>
          </chakra.main>
        </Container>
      </PageLayout>
    </>
  );
};

export default Home;
