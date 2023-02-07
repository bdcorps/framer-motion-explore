import * as Icons from "@chakra-ui/icons";
import * as Chakra from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import * as Motion from "framer-motion";
import React, { FunctionComponent } from "react";
import { LiveEditor, LivePreview, LiveProvider } from "react-live";

const scope = {
  ...React,
  ...Chakra,
  ...Motion,
  ...Icons,
};

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  return (
    <LiveProvider code="<strong>Hello World!</strong>" scope={scope}>
      <HStack w="100vw" align="stretch">
        {/* <LiveError /> */}
        <Chakra.Box flex={1}>
          <LivePreview />
        </Chakra.Box>

        <Chakra.Box flex={1}>
          <LiveEditor />
        </Chakra.Box>
      </HStack>
    </LiveProvider>
  );
};

export default Dashboard;
