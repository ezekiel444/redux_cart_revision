import {ActionsType} from '../constant/allTypes'



export const getAllProduct = ()=>{
return {
    type:ActionsType.GET_ALL_PRODUCTS
}
}


export const clearProduct = ()=>{
    return {
        type:ActionsType.CLEAR_CART
    }
}


export const removeItem = (id)=>{
    return {
        type:ActionsType.REMOVE,
        payload:id
    }
}


// export const increase = (id,price)=>{
//     return {
//         type:ActionsType.INCREASE,
//         payload:{id,price}
//     }
// }

// export const decrease = (id,amount,price)=>{
//     return {
//         type:ActionsType.DECREASE,
//         payload:{id,amount,price}
//     }
// }


export const toggleIncreaseAndDecrease = (id,currentState)=>{
    return {
        type:ActionsType.TOGGLE_INCREASE_AND_DECREASE,
        payload:{
            id,currentState
        }
    }
}

export const CalculateTotalAndAmount = ()=>{
    return {
        type:ActionsType.GET_TOTAL_AND_AMOUNT
    }

}