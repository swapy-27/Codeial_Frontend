import { API_URLS, getFormBody, LOCALSTORAGE_TOKEN_KEY } from "../utils";

const customFetch = async (url, { body, ...customConfig }) => {
  let token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  token = JSON.parse(token);

  var headers = {
    "content-type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = getFormBody(body);
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (data.success) {
      return {
        data: data.data,
        success: true,
      };
    }

    throw new Error(data.message);
  } catch (error) {
    console.error("error");
    return {
      message: error.message,
      success: false,
    };
  }
};



export const getPost = (page = 1, limit = 5) => {
  return customFetch(API_URLS.posts(page, limit), {
    method: 'GET',

  });
}


export const login = async (email, password) => {

  return await customFetch(API_URLS.login(), {
    method: 'POST',
    body: {
      email,
      password
    }
  })
}

export const userRegistration = async (userName, email, password, confirmPassword) => {
  return await customFetch(API_URLS.signup(), {
    method: 'POST',
    body: {
      name: userName,
      email,
      password,
      confirm_password: confirmPassword
    }
  })
}

export const editProfile = async (userId, name, password, confirmPassword) => {
  return await customFetch(API_URLS.editUser(), {
    method: 'POST',
    body: {
      id: userId,
      name,
      password,
      confirm_password: confirmPassword
    }
  })
}

export const fetchUserProfile = async (userId) => {
  return await customFetch(API_URLS.userInfo(userId), {
    method: 'GET',

  })

}

export const fetchUserFreinds= async (userId) => {
  return await customFetch(API_URLS.friends(userId), {
    method: 'GET',

  })

}
export const addFriend= async (userId) => {
  return await customFetch(API_URLS.createFriendship(userId), {
    method: 'POST',

  })

}

export const removeFriend= async (userId) => {
  return await customFetch(API_URLS.removeFriend(userId), {
    method: 'POST',

  })

}
