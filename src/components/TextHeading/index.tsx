import { Heading } from '@chakra-ui/react';

export function TextHeading() {
  return (
    <Heading
      textAlign="center"
      fontWeight="500"
      mb={["5", "14"]}
      fontSize={["lg", "3xl", "4xl"]}
    >
      Vamos nessa?<br/>Então escolha seu continente
    </Heading>
  );
}