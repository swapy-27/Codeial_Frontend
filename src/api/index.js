import { API_URLS } from "../utils";

const customFetch = async (url,{body,...customConfig})=>{
    const token = window.localStorage.getItem("LOCALSTORAGE_TOKEN_KEY");
    
    var headers = {
        'content-type' : 'application/json',
        Accept : 'application/json'
    };

    if(token){
        headers.Authentication = `Bearer ${token}`
    }
    var config = {
        ...customConfig,
        headers:{
            ...headers,
            ...customConfig.headers
        }
    } 
    if(body){
        config.body=JSON.stringify(body);
    }
    try{
        const response = await fetch(url,config);
        const data = await response.json();

        if ( data.success){
            return {
                data:data.data,
                success:true
            }
        }
        else{
            throw new Error(data.message);
        }
    }
    catch(error){
        console.log('Error in custom Fetch =>',error);
        return {
            message :error.message,
            success:false
        }
        
    }

}



export const getPost = (page =1 , limit =5)=>{
    return customFetch(API_URLS.posts(page , limit),{
        method :'GET'
    });
}