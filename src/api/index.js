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

        if ( response.status>=200 && response.sta<300){
            return {
                data:data.data,
                success:true
            }
        }
    }
    catch(error){
        console.log('Error in custom Fetch =>',error);
    }

}



const getPost = ()=>{
    return customFetch();
}