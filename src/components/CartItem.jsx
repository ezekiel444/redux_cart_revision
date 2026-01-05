import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {removeItem, toggleIncreaseAndDecrease} from "./redux/action/actionDispatch"


const CartItem = () => {

  const data = useSelector(state=>state.allProducts)

  const dispatch = useDispatch()

  const handleRemoveItem = (id)=>{
  dispatch(removeItem(id))
  } 


const toggleIncrease_Decrease = (id,currrentState)=>{
  dispatch(toggleIncreaseAndDecrease(id,currrentState))  
}

const renderCart = data.cart.map(cart=>{
  const { img, title, price, amount, id } = cart

  return (
    <div className="cart-item" key={id}>
    <img src={img} alt={title} />
    <div>
      <h4>{title}</h4>
      <h4 className="item-price">${price}</h4>
      {/* remove button */}
      <button className="remove-btn" onClick={()=>handleRemoveItem(id)}>remove</button>
    </div>
    <div>
      {/* increase amount */}
      <button className="amount-btn" onClick={()=>toggleIncrease_Decrease(id,'INCREASE')}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
        </svg>
      </button>
      {/* amount */}
      <p className="amount">{amount}</p>
      {/* decrease amount */}
      <button className="amount-btn" onClick={()=>{
        if(amount < 1){
          handleRemoveItem(id)
        }else{
          toggleIncrease_Decrease(id,'DECREASE')
        }
      }} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
    </div>
  </div>
  )


})

  

  return (
   <>
   {renderCart}
    </>
  );
};

export default CartItem;
