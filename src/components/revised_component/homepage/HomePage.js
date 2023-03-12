import React from 'react'
import HeroArea from './HeroArea'
import Navbar from './Navbar'

function HomePage() {
    const color="bg-[#052C39]";
  return (
    <>
    <Navbar color={color}/>
    <HeroArea/>
    </>
  )
}

export default HomePage