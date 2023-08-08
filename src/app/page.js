

import Image from 'next/image'
import Header from './components/Header'
import WatchList from './components/WatchList'
import Footer from './components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Header/>
    <WatchList />
    <Footer/>
    </>
  )
}
