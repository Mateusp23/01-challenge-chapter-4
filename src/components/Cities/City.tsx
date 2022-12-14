import { Box, Image, Flex, Heading, Text } from '@chakra-ui/react';

interface CityProps {
  image: string;
  title: string;
  subtitle: string;
  flag: string;
}

export function City({ image, title, subtitle, flag }: CityProps) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={`/${image}.png`} h="170px" w="100%" />
      <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="600">{title}</Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">{subtitle}</Text>
        </Flex>
        <Image src={`/${flag}.png`} w="30px" h="30px" borderRadius="50%" objectFit="cover"/>
      </Flex>
    </Box>
  );
}