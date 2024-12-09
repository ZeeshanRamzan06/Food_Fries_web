import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
    const [category,setCategory] =useState()
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCatgory={setCategory}/>
        <FoodDisplay category ={category} />
        <AppDownload />
    </div>
  )
}

export default Home