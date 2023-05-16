import Hero from "@/components/Hero/hero";
import Snickers from "@/components/Snickers";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-1">
        <Hero />
<Snickers />
      </div>
    </main>
  )
}
