import React from "react";
import { Heading, Box, Text, VStack, Link, TagLabel } from "@chakra-ui/react";

const PageRedirectCard = ({
  title,
  navLink,
}: {
  title: string;
  navLink: string;
}): JSX.Element => {
  return (
    <Box
      width="100%"
      background="#2C3539"
      borderWidth="1px"
      borderColor="white"
      as="button"
      borderRadius="xl"
    >
      <VStack padding={3}>
        <Link href={navLink}>{title}</Link>
      </VStack>
    </Box>
  );
};

export default PageRedirectCard;
