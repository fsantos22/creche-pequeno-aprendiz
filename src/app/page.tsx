"use client"

import { GlobalStyle } from "./globalStyles"
import Hero from "components/Hero/Hero"

export default function Home() {
  return (
    <main className="main-container">
      <GlobalStyle />
      <Hero />
    </main>
  )
}
