import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category ,setCategory}) => {
  console.log("setcategory:",setCategory)
  return (
    <div className='explore-menu' id='explore-menu'>

        <h1>Explore our Menu</h1>
        <p>Experience the joy of delicious meals, delivered fresh to your doorstep.
        FoodFries brings the best flavors right to you!</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                       <img className={category ===item.menu_name? "active":""} src={item.menu_image} alt="" />
                       <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu