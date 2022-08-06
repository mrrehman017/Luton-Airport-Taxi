import React from 'react'
import AboutUs from './AboutUs'
import Journey from './Journey'
import TexiTransfer from './TexiTransfer'
import NewsArtical from './NewsArtical'
import Footer from './Footer'

export const Home = () => {
  return (
    <>
        <Journey/>
        <TexiTransfer/>
        <AboutUs/>
        <NewsArtical/>
        <Footer/>
    </>
  )
}
export default Home