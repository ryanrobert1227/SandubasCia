import { Flex, Text, Container, Box } from '@chakra-ui/react'

import Card from './Card';

import { categoryType } from '../Types/interface'

interface CategoryProps {
  item: categoryType;
}

export default function Category(props: CategoryProps) {
  const { name, discription, options } = props.item

  return (
  <Box>
    <Flex flexDirection="column" alignItems="center" justifyContent="space-evenly" height="fit-content" padding="1.5vh 0">
      <Text fontSize="2.5rem" fontWeight="600" textAlign="center" color="#f00" css={{WebkitTextStrokeWidth: "0.1rem", WebkitTextStrokeColor: "#Fff"}}>{ name }</Text>
      <Text fontSize="1.5rem" fontWeight="500" color="white" >{ discription }</Text>
    </Flex>
    <Container display="grid" gridTemplateColumns="repeat(auto-fill, minmax(260px, 1fr))" columnGap="1vw" rowGap="2rem" maxWidth="100%" padding="0 5%">
      {options.map((item) => <Card key={item.id} item={item} />)}
    </Container>
  </Box>
  )
}
