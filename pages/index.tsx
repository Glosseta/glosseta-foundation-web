import type { NextPage } from "next";
import PageLayout from "../components/layouts";
import {
  VStack,
  chakra,
  Heading,
  Container,
} from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <PageLayout>
        <Container maxW={{ base: "sm", sm: "xl" }}>
          <chakra.main textColor={"white"}>
            <VStack>
              <Heading as="h1">Glosseta Foundation</Heading>
            </VStack>
          </chakra.main>
        </Container>
      </PageLayout>
    </>
  );
};

export default Home;
