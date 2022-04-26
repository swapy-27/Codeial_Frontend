import { useState } from "react";

export const useProvideAuth = () =>{
    const [user,setUser]= useState;
    const [loading,setLoading ] = useState(true);


    const login =(email,password) =>{};
    const logout = ()=>{};

    
    return {
        user,
        login,
        logout,
        loading,
    }

}