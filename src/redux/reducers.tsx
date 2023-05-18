import { SET_EMAIL,SET_FIRST_NAME,SET_LAST_NAME,SET_PASSWORD,SET_COUNTRY_NAME } from "./actions";



const initialState = {
    email: '',
    fname: '',
    lname: '',
    pw: '',
    country: ''
}

const userReducer=(state= initialState,action:any)=>{
    switch (action.type) {
        case SET_EMAIL:
            return{...state,email:String(action.payload)}
        case SET_FIRST_NAME:
            return{...state,fname:String(action.payload)}
        case SET_LAST_NAME:
            return{...state,lname:String(action.payload)}
        case SET_PASSWORD:
            return{...state,pw:String(action.payload)}
        case SET_COUNTRY_NAME:
            return{...state,country:String(action.payload)}
        default:
            return state
    }
}

export default userReducer;






