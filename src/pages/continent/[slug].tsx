import { Flex } from '@chakra-ui/react';
import { Header } from '../../components/Header/index';
import { ContinentBanner } from '../../components/ContinentBanner/index';
 
export default function Continent() {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner />
    </Flex>
  );
}