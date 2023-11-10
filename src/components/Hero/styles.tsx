import styled from "styled-components"

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url("/images/hero-bg2.jpg");
  height: 100vh;
  background-position: center;
  background-size: cover;
`

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`
export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  font-family:'Advent Pro';
  margin-bottom: 1rem;
  box-shadow: 3px 5px var(--yellow);
  letter-spacing: 7px;
`

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  font-family:'Advent Pro';
  margin-bottom: 2rem;
`

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  font-family:'Khand';
  padding: 1rem 4rem;
  border: none;
  background: var(--red);
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`
