import { Box, Flex, Text, Image } from '@chakra-ui/react'

import { optionType } from '../Types/interface';
import indisponivel from "../assets/Indisponivel.jpg"


interface CardProps {
  item: optionType;
}

export default function Card(props: CardProps) {
  const { name, image, price, discription } = props.item

  return (
    <Flex flexDirection="column" position="relative" height="fit-content" background="#dfd520" borderRadius="0.5rem" boxShadow="rgba(0, 0, 0, 0.400) 0px 8px 15px">
      <Box position="relative" width="100%">
        <Image height="100%" width="100%" borderTopRadius="0.5rem" src={ image } alt="foto de hambuguer"></Image>
        {image !== indisponivel && <Text position="absolute" bottom="0" left="0" right="0" textAlign="center" fontSize="1rem" color="#ff0000" >*Foto Ilustrativa*</Text>}
      </Box>
      <Box height="fit-content" padding="1rem">
        <Text fontSize="1.4rem" >{ name }</Text>
        <Box position="absolute" top="0" right="0" background="#dfd520" padding="0.1rem 1rem" borderBottomLeftRadius="0.3rem" borderTopRightRadius="0.3rem">
          <Text  fontSize="1.5rem" textColor="#ff0000" fontWeight="800">{ price }</Text>
        </Box>
        <Text mt="0.5rem">{ discription }</Text>
      </Box>
    </Flex>
)
}
