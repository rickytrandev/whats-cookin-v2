import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Head from "next/head";
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "What's Cooking",
  description: "AI Curated Recipes For You",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="lg:mx-48">{children}</body>
    </html>
  )
}
