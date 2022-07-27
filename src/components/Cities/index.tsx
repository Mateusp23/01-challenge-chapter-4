import { Heading, Grid } from '@chakra-ui/react';
import { City } from './City';

export function Cities() {
  return (
    <>
      <Heading
        fontWeight="500"
        fontSize={["2xl", "4xl"]}
        mb="10"
      >
        Cidades +100
      </Heading>

      <Grid 
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "40px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City
          image="londres"
          title="Londres"
          subtitle="Reino Unido"
          flag="flag-londres"
        />
        <City
          image="paris"
          title="Paris"
          subtitle="França"
          flag="flag-paris"
        />
        <City
          image="roma"
          title="Roma"
          subtitle="Itália"
          flag="flag-roma"
        />
        <City 
          image="praga"
          title="Praga"
          subtitle="República Tcheca"
          flag="flag-praga"
        />
        <City 
          image="amsterda"
          title="Amsterdã"
          subtitle="Holanda"
          flag="flag-amsterda"
        />
      </Grid>
    </>
  );
}