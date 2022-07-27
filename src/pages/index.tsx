import { Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner/index';

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
    </Flex>
  );
}
