import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import "./style.scss"
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
import Similar from '../details/carousels/Similar'

const Home = () => {
  return (
    <div className='homePage'>
    <HeroBanner/>
    <Trending />
    <Popular />
    <TopRated />
    </div>
  )
}

export default Home;
