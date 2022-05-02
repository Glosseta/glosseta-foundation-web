import React from "react";
import { Heading, Box, Text, VStack, Link, TagLabel } from "@chakra-ui/react";

const ContentCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}): JSX.Element => {
  return (
    <>
      <Box
        width="90%"
        background="#2C3539"
        borderWidth="1px"
        borderColor="black"
      >
        <VStack padding={5}>
          <Heading
            as="h1"
            padding={2}
            color="white"
            fontSize={{ base: "md", sm: "xl" }}
          >
            {title}
          </Heading>
          <Text padding={2} fontSize={{ base: "xs", sm: "md" }} color="white">
            {content}
          </Text>
        </VStack>
      </Box>
    </>
  );
};

export default ContentCard;
