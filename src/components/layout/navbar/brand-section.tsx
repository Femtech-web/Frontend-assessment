"use client";

import { Center, Image, HStack } from "@chakra-ui/react";
import yellowBrand from "@/assets/images/externalBrands/yellowImage.png";
import greenBrand from "@/assets/images/externalBrands/greenImage.png";
import blueBrand from "@/assets/images/externalBrands/blueImage.png";
import redBrand from "@/assets/images/externalBrands/redImage.png";

const BrandContainer = ({ src, alt }: { src: string; alt?: string }) => (
  <Center
    as="button"
    w="46px"
    h="46px"
    rounded="10px"
    border="1px"
    borderColor="brandBorder.2"
    _hover={{ opacity: 0.7 }}
  >
    <Image src={src} alt={alt || ""} objectFit="contain" />
  </Center>
);

export const BrandSection = () => (
  <HStack spacing={2}>
    <BrandContainer src={yellowBrand.src} alt="yellow-brand" />
    <BrandContainer src={greenBrand.src} alt="green-brand" />
    <BrandContainer src={blueBrand.src} alt="blue-brand" />
    <BrandContainer src={redBrand.src} alt="red-brand" />
  </HStack>
);
