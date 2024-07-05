import { useState } from "react";

import Modal from "react-modal"

import {Flex, Text, Link, Image } from "@chakra-ui/react";
import { FaRegClock, FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

import { values } from "../miniDataBase/flexValues"

import Logo from "../assets/Logo2.png"

import "./modal.css"

export default function Header() {
  const [openModalOpeningHours, setOpenModalOpeningHours] = useState<boolean>(false)

  function closeModalOpeningHours() {
    setOpenModalOpeningHours(false)
  }

  return (
    <>
    <Modal
        isOpen={openModalOpeningHours}
        onRequestClose={closeModalOpeningHours}
        contentLabel="example label"
        overlayClassName="modal-overlay"
        className="modal-content"
        ariaHideApp={false}
      >
        <Text fontSize="1.3rem" fontWeight="500">Horario de Funcionamento:</Text>
        <Text fontSize="1.5rem" fontWeight="500">{ values.startTime } até { values.endTime }</Text>
    </Modal>
    <Flex zIndex={1} justifyContent="space-between" alignItems="center" position="fixed" top="0" 
      width="100%" height="8vh" 
      background="rgb(223, 213, 32, 0.50)"
      boxShadow="rgba(197, 151, 43, 0.7) 0px 0px 10px"
      backdropFilter="blur(15px)"
      css={{ WebkitBackdropFilter: "blur(15px)"}}>
        <Flex alignItems="center" width="50%" height="100%" opacity="100%" pl={{ base: '0.5rem', md: '1rem', lg: '2rem' }}>
          <Image height="auto" width={{ base: '2rem', md: '2.5rem', lg: '3rem' }} src={ Logo } />
          <Text fontSize={{ base: '1rem', md: '1.5rem', lg: '2rem' }} color="White" fontWeight="900">SANDUBAS E CIA</Text>
        </Flex>
        <Flex justifyContent="space-evenly" alignItems="center" width="50%" height="100%">
          <Link _hover={{color: "#fff"}}>
            <FaRegClock size="1.5rem" opacity="100%" onClick={() => {
              setOpenModalOpeningHours(true)
              
            }}/>
          </Link>
          <Link href={`https://wa.me/${values.number}`} target="_blank" _hover={{color: "#fff"}}>
            <FaWhatsapp size="1.5rem" opacity="100%"/>
          </Link>
          <Link href={values.locationLink} _hover={{color: "#fff"}}>
            <IoLocationOutline size="1.5rem" opacity="100%"/>
          </Link>
        </Flex>
      </Flex>
    </>
  )
}