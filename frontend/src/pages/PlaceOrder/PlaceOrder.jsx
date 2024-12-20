import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const navigate = useNavigate();
  const {getTotalCartAmount} = useContext(StoreContext)
  const totalAmount = getTotalCartAmount() + 2;
  return (
    <form className='place-order'>
    <div className='place-order-left'>
     <p className="title">Delivery Information</p>
     <div className="multi-fields">
      <input type="text" placeholder='First Name'/>
      <input type="text" placeholder='Last Name'/>
     </div>
     <input type="email" placeholder='Email Adress'/>
      <input type="text" placeholder='Street'/>
      <div className="multi-fields">
      <input type="text" placeholder='City'/>
      <input type="text" placeholder='State'/>
      </div>
      <div className="multi-fields">
      <input type="text" placeholder='Zip code'/>
      <input type="text" placeholder='Country'/>
      </div>
      <input type="text" placeholder='Phone'/>

    </div>
    <div className="place-order-right">
    <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>

            <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${totalAmount}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/payment-method' ,{ state: { amount: totalAmount } }) }>PROCEED TO PAYMENT</button>
      </div>
      </div>
    </div>
    </form>
  )
}

export default PlaceOrder