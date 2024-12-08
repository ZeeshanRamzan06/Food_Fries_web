import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import { useContext } from 'react'

const FoodItem = ({ id, name, price, description, image }) => {
   
    const { cartItems, addToCart, removeItems } = useContext(StoreContext);

    return (
        <div className='foodItem' id='contact-us'>
            <div className="food-item-image-container">
                <img className='food-item-image' src={image} alt={name} />
                {!cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add" />
                    : <div className='food-item-counter'>
                        <img onClick={() => removeItems(id)} src={assets.remove_icon_red} alt="Remove" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add more" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating stars" />
                </div>
                <p className="food-item-description">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem
