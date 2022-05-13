import { API_URLS, getFormBody } from "../utils";

const customFetch = async (url, { body, ...customConfig }) => {
    const token = window.localStorage.getItem("LOCALSTORAGE_TOKEN_KEY");

    var headers = {
        'content-type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',

    };

    if (token) {
        headers.Authentication = `Bearer ${token}`
    }
    var config = {
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers
        }
    }
    if (body) {
        config.body = getFormBody(body);
    }
    try {
        const response = await fetch(url, config);
        const data = await response.json();

        if (data.success) {
            return {
                data: data.data,
                success: true
            }
        }
        else {
            throw new Error(data.message);
        }
    }
    catch (error) {
        console.log('Error in custom Fetch =>', error);
        return {
            message: error.message,
            success: false
        }

    }

}



export const getPost = (page = 1, limit = 5) => {
    return customFetch(API_URLS.posts(page, limit), {
        method: 'GET',

    });
}


export const login = async (email, password) => {
    console.log(email,password)
    return await customFetch(API_URLS.login(), {
        method: 'POST',
        body: {
            email,
            password
        }
    })
}

export const userRegistration = (userName,email,password,confirmPassword)=>{
    return customFetch(API_URLS.signup(),{
        method:'POST',
        body:{
            name:userName,
            email,
            password,
            confirmPassword
        }
    })
}