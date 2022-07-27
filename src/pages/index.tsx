import { Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner/index';
import { Options } from '../components/Options/index';
import { Separator } from '../components/Separator/index';
import { TextHeading } from '../components/TextHeading/index';

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Options />
      <Separator />
      <TextHeading />
    </Flex>
  );
}
