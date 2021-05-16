import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { CalculateTotalAndAmount } from "./redux/action/actionDispatch";
import {ActionsType} from './redux/constant/allTypes'

const CartContainer = () => {

const data = useSelector(state=>state.allProducts)

const dispatch = useDispatch()





const cart = data.cart



useEffect(() => {
  dispatch(CalculateTotalAndAmount())
},[dispatch,cart])

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
       <CartItem />
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${data.total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={()=>dispatch({type:ActionsType.CLEAR_CART})} >clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
