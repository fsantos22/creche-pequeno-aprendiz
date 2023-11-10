import type { Metadata } from "next"
import { Inter } from "next/font/google"
import StyledComponentsRegistry from "./registry"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Creche Escola Pequeno Aprendiz",
  description: "Creche Escola Pequeno Aprendiz"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Advent+Pro&family=Fasthand&family=Just+Another+Hand&family=Khand&family=Patrick+Hand&family=Patrick+Hand+SC&display=swap" rel="stylesheet"/>
        {/* <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;900&display=swap" rel="stylesheet" /> */}
      </head>
      <StyledComponentsRegistry>
        <body className={inter.className}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  )
}
