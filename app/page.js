
import Banner from '@/components/Banner'
import Brands from '@/components/Brands'
import Footer from '@/components/Footer'
import Join from '@/components/Join'
import Products from '@/components/Products'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Banner/>
        <Brands/>
        <Products/>
        <Join/>
        <Footer/>
      </div>
    </main>
  )
}
