import { Flex } from '@chakra-ui/react'

import Header from './components/Header'
import Category from "./components/Category"

import { menuData } from "./miniDataBase/menu"

import "./global.css"

function App() {

  return (
    <>
      <Header />
      <Flex flexDirection="column" gap="5vh" height="fit-content" pt="8vh">
        {menuData.map((item) => <Category key={item.id} item={item} />)}
      </Flex>
    </>
  )
}

export default App