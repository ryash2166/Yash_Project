import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST, PRODUCT_SET } from "../Redux/Constant";
// import axios from "axios";

function * getProduct(){
    // try{
    //     let response = yield axios.get('http://localhost:3000/Plant')
    //     yield put({
    //         type: PRODUCT_SET , 
    //         data: response.data
    //     })
    // }catch(error){
    //     console.log(error);
    // }npm install redux-saga
    let data = yield fetch ('http://localhost:3000/Plant')
    data = yield data.json()
    yield put({type:PRODUCT_SET , data})
}

function * ProductSaga(){
    yield takeEvery(PRODUCT_LIST, getProduct)
}

export default ProductSaga