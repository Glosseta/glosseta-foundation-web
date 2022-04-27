import React, { ReactNode } from "react";
import { Stack } from "@chakra-ui/react";
import Footer from "../footer";

const PageLayout = ({ children }: { children?: ReactNode }): JSX.Element => {
  return (
    <>
      <Stack
        spacing={10}
        padding={1}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        minHeight="100vh"
      >
        {children}
      </Stack>
      <Footer />
    </>
  );
};

export default PageLayout;
