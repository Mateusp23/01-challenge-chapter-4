import { 
  Flex, 
  Heading, 
  Text, 
  Popover, 
  PopoverTrigger, 
  PopoverContent, 
  PopoverArrow, 
  PopoverCloseButton, 
  PopoverBody,
  Icon 
} from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';

export function Infos() {
  return (
    <Flex
      align="center"
      justify="space-between"
    >
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.400"
          fontWeight="600"
        >
          50
        </Heading>
        <Text
          fontSize={["md", "xl"]}
          color="gray.700"
          fontWeight="600"
        >
          países
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.400"
          fontWeight="600"
        >
          60
        </Heading>
        <Text
          fontSize={["md", "xl"]}
          color="gray.700"
          fontWeight="600"
        >
          linguas
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.400"
          fontWeight="600"
        >
          27
        </Heading>
        <Text
          fontSize={["md", "xl"]}
          color="gray.700"
          fontWeight="600"
        >
          cidades +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon 
                  as={RiInformationLine} 
                  cursor="pointer" 
                  ml="1" 
                  color="gray.400"
                  w={["10px", "16px"]}
                  h={["10px", "16px"]}
                />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700"/>
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg" >
                França, Itália, Portugal, Espanha, Alemanha, Bélgica, Holanda
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>    
    </Flex>
  );
}