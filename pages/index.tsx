import Header from "@/shared/components/Header/header";
import Hero from "@/components/Hero/hero";
import Snickers from "@/components/Snickers";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header home />
    <main>
      <div className="container mx-auto px-1">
       <Hero />
       <Snickers />
     </div>
    </main>
      </>
  )
}
