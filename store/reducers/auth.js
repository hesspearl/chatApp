import { SIGNIN } from "../action/auth"

const initial={
    email:null,
    password:null,
    token:null
}


export default(state=initial , action)=>{
    switch (action.type){
        case SIGNIN:{
            return{
                email:action.email,
                password:action.password
            }
        }

        default:
            return state
    }
}