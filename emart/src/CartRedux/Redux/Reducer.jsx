import { ADD_TO_CART , REMOVE_TO_CART, EMPTY_CART, INCREASE_CART_COUNT, DECREASE_CART_COUNT} from "./Constant"

const getCartDataFromLocalStorage = () => {
    const cartData = localStorage.getItem('cart')
    return cartData ? JSON.parse(cartData) : []
}

const Reducer = (state = getCartDataFromLocalStorage(), action) =>{
    switch(action.type){
        case ADD_TO_CART : 
            // const updatedCartAdd = [action.data , ...state]
            // localStorage.setItem('cart' , JSON.stringify(updatedCartAdd))
            // return updatedCartAdd

            const existingProduct = state.findIndex(item => item.id === action.data.id)
            let updatedCartData;
            
            if(existingProduct >= 0 ) {
                updatedCartData = state.map((item) => item.id === action.data.id ? {...item, quantity:item.quantity += 1}: item)
                localStorage.setItem('cart' , JSON.stringify(updatedCartData))
            }else{
                updatedCartData = [{...action.data, quantity : 1}, ...state]
            }
            localStorage.setItem('cart' , JSON.stringify(updatedCartData))

            return updatedCartData
        case INCREASE_CART_COUNT :
        // console.log("payload",action.payload.quantity);
            // state.cartList = state.cartList.map((item) => item.quantity = item.quantity + 1 )
            // console.log("map",state.cartList);
            const updatedCartIncrement = state.map(item =>
                item.id === action.data ? { ...item , quantity: item.quantity + 1 } : item
            );
            localStorage.setItem('cart', JSON.stringify(updatedCartIncrement));
            return updatedCartIncrement;

        case DECREASE_CART_COUNT :
            const updatedCartDecrement = state.map(item =>
                item.id === action.data && item.quantity > 1 ? { ...item , quantity: item.quantity - 1 } : item
            );
            localStorage.setItem('cart', JSON.stringify(updatedCartDecrement));
            return updatedCartDecrement;
            
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