import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className="header-content">
            <h2 className='main-heading'>Order your favourite food here</h2>
            <p>Experience the joy of delicious meals, delivered fresh to your doorstep.
               FoodFries brings the best flavors right to you!</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header