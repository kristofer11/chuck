import React from 'react'
import Hero from '../components/Hero'
import HomeImages from '../components/HomeImages'
import HomePriorities from '../components/HomePriorities'
import HomeVideos from '../components/HomeVideos'
import FeaturedVideo from '../components/FeaturedVideo'

const Home = () => {
  return (
    <>
        <Hero />
        <HomeImages />
        <HomePriorities />
        <HomeVideos />
    </>
  )
}

export default Home;