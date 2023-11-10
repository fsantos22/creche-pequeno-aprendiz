import Navbar from "components/Navbar/Navbar"
import React from "react"
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from "./styles"

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <HeroItems>
          <HeroH1>Ensinando e cuidando com carinho</HeroH1>
          <HeroP>A melhor de Anchieta e região</HeroP>
          <HeroBtn>Contate-nos</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
