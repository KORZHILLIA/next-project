import { useRouter } from "next/router";

import Header from "@/components/Header";
import Hero from "@/components/Hero/hero";
import Snickers from "@/components/Snickers";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  console.log(router);
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
