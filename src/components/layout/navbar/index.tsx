"use client";

import React from "react";
import { Flex, ButtonGroup } from "@chakra-ui/react";

// sub-components
import { SearchInput } from "./search-input";
import { BrandSection } from "./brand-section";
import { ProfileSection } from "./profile-section";
import { CustomBtn } from "./custom-btn";

const Navbar = () => {
  return (
    <Flex sx={addStyles.container}>
      <Flex alignItems="center" px={8} gap={12}>
        <SearchInput />
        <BrandSection />
        <Flex alignItems="center" gap={8}>
          <ButtonGroup spacing={2}>
            <CustomBtn text="Melding maken" bgColor="brandPurple" />
            <CustomBtn text="VIM" bgColor="brandGreen.400" />
            <CustomBtn text="DataLek" bgColor="brandGreen.400" />
          </ButtonGroup>
          <ProfileSection />
        </Flex>
      </Flex>
    </Flex>
  );
};

const addStyles = {
  container: {
    minHeight: "80px",
    width: "82vw",
    backgroundColor: "white",
    borderBlockEnd: "1px",
    borderBlockEndColor: "brandBorder.1",
  },
};

export default Navbar;
