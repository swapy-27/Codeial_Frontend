import jwtDecode from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import { loginForm as userLogin } from "../api";
import { AuthContext } from "./AuthProvider";

export const useAuth = () =>{
    return useContext(AuthContext);
}
export const useProvideAuth = () =>{
    const [user,setUser]= useState;
    const [loading,setLoading ] = useState(true);

    // useEffect(()=>{
    //   const userToken = getItemFromLocalStorage()

    //   if(userToken){
    //     const user = jwtDecode(userToken);
    //     setUser(user);
    //     setLoading(false);
    //   }
    // },[])
    const login = async (email, password) => {
        const response = await userLogin(email, password);
        console.log(response)
        if (response.success) {
          setUser(response.data.user);
         
          return {
            success: true,
          };
        } else {
          return {
            success: false,
            message: response.message,
          };
        }
      };
    const logout = ()=>{
        setUser(null);
    };

    
    return {
        user,
        login,
        logout,
        loading,
    }

}