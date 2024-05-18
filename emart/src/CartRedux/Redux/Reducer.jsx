import { ADD_TO_CART , REMOVE_TO_CART, EMPTY_CART} from "./Constant"

const getCartDataFromLocalStorage = () => {
    const cartData = localStorage.getItem('cart')
    return cartData ? JSON.parse(cartData) : []
}

const Reducer = (state = getCartDataFromLocalStorage(), action) =>{
    switch(action.type){
        case ADD_TO_CART : 
            const updatedCartAdd = [action.data , ...state]
            localStorage.setItem('cart' , JSON.stringify(updatedCartAdd))
            return updatedCartAdd

        case REMOVE_TO_CART : 
            // data.length = data.length - 1
            const updatedCartRemove = state.filter(item => item.id !== action.data)
            localStorage.setItem('cart' , JSON.stringify(updatedCartRemove))
            // data.length = data.length ? data.length - 1 : []
            return updatedCartRemove
            
        case EMPTY_CART : 
            localStorage.removeItem('cart')
            return []
        default : return state
    }
}

export default Reducer