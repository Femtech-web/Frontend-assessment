import {
  Box,
  Image,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
} from "@chakra-ui/react";

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
  url: string;
}

export const NewsCard = ({ image, title, description, url }: NewsCardProps) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{
        boxShadow: "lg",
        transform: "scale(1.02)",
        borderWidth: "1px",
        borderColor: "brandGreen.400",
      }}
      transition="all 0.3s ease-in-out"
    >
      <Image src={image} alt={title} objectFit="cover" w="100%" h="200px" />

      <VStack align="start" p={4} spacing={3}>
        <Heading size="md" noOfLines={2}>
          {title}
        </Heading>
        <Text noOfLines={3} color="gray.600">
          {description}
        </Text>

        <HStack spacing={2}>
          <Link
            href={url}
            color="brandPurple"
            isExternal
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
          >
            Read more
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};
