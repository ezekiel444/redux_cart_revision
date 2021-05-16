import { ActionsType} from '../constant/allTypes'
import cartItems from '../../../cart-items'


const initialState = {
    cart:cartItems,
    total:0,
    amount:0
   }


   export const productReducer = (state=initialState, {type,payload})=>{
       switch(type){
         case ActionsType.GET_ALL_PRODUCTS:
                return state

        case ActionsType.CLEAR_CART:
           return {
               ...state, cart:[]
           }

        case ActionsType.REMOVE:
            const filteredCart = state.cart.filter(cartId=> cartId.id !== payload)
    
            return {
                ...state, cart:filteredCart
            }

        case ActionsType.TOGGLE_INCREASE_AND_DECREASE:
            const {currentState,id} = payload
         let AmountControl =  state.cart.map(cart=>{
              if(cart.id === id){
                  if(currentState === "INCREASE"){
                 return {...cart, amount:cart.amount + 1}
                  }else{
                        if(currentState ==="DECREASE"){
                            return {...cart, amount:cart.amount -1}
                        }
                  }
              }
              return cart
          })
         
          return {...state, cart:AmountControl}
    

            case ActionsType.GET_TOTAL_AND_AMOUNT:

            let {amount, total} = state.cart.reduce((totalCart, currCart)=>{
                let {amount,price} = currCart

                totalCart.amount += amount

                let itemPrice = price * amount
                 totalCart.total += itemPrice


                return totalCart
            },{total:0,amount:0})
            
                total = parseFloat(total.toFixed(2))
          
            return {...state, amount, total}
                
        default:
            return state
       }
   }