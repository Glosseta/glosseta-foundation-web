import React from "react";
import { Image, VStack, Text, Heading } from "@chakra-ui/react";
import PageLayout from "../../components/layouts";

const Directors = (): JSX.Element => {
  return (
    <PageLayout>
      <Heading as="h1" textColor={"white"}>
        Executive board
      </Heading>
      <Image
        boxSize="200px"
        borderRadius="full"
        src="https://avatars.githubusercontent.com/u/29411347?v=4"
        alt="Narbeh Shahnazarian"
      />
      <VStack textColor={"white"}>
        <Heading as="h2" fontSize="xl">
          Narbeh Shahnazarian
        </Heading>
        <Text fontSize="xl">Founder of Glosseta</Text>
      </VStack>
    </PageLayout>
  );
};

export default Directors;
