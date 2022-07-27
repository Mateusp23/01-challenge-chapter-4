import { Flex } from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { ContinentBanner } from '../../components/ContinentBanner';
import { TextContent } from '../../components/TextContent';
 
export default function Continent() {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner />

      <Flex
        direction="column"
        maxW="1160px"
        mx="auto"
        mb="10"
        px="1rem"
      >
        <TextContent />
      </Flex>
    </Flex>
  );
}