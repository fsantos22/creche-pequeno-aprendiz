"use client"

import Navbar from "components/Navbar/Navbar"
import { GlobalStyle } from "./globalStyles"

export default function Home() {
  return (
    <main className="main-container">
      <GlobalStyle />
      <Navbar />
    </main>
  )
}
