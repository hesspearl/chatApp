export const SIGNIN="SIGNIN"
export const NEWACC="NEWACC"


export const signIn=(email,password)=>{
    return{type:SIGNIN , email , password}
}