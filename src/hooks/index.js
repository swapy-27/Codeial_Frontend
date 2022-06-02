
import { useContext, useState, useEffect } from 'react';
import jwt from 'jwt-decode';

import { AuthContext } from '../providers/AuthProvider';
import { editProfile, fetchUserFreinds, login as userLogin } from '../api';
import { userRegistration } from '../api';


import {
  setItemInLocalStorage,
  LOCALSTORAGE_TOKEN_KEY,
  removeItemInLocalStorage,
  getItemInLocalStorage,
} from '../utils';

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getUser = async () => {
      const userToken = getItemInLocalStorage(LOCALSTORAGE_TOKEN_KEY);

      if (userToken) {
        const user = jwt(userToken);
        const response = await fetchUserFreinds(user._id)
        user.friendships = response.data.friends
        console.log(user)
        setUser(user);
      }

    }
    getUser();
    setLoading(false);
  }, []);

  const login = async (email, password) => {

    const response = await userLogin(email, password);

    if (response.success) {
      console.log(response.data)
      setUser(response.data.user);

      setItemInLocalStorage(
        LOCALSTORAGE_TOKEN_KEY,
        response.data.token ? response.data.token : null
      );
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

  const signup = async (name, email, password, confirmPassword) => {

    const response = await userRegistration(name, email, password, confirmPassword);

    if (response.success) {
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

  const logout = () => {
    setUser(null);
    removeItemInLocalStorage(LOCALSTORAGE_TOKEN_KEY);
  };

  const updateUser = async (userId, name, password, confirmPassword) => {

    const response = await editProfile(userId, name, password, confirmPassword);

    setItemInLocalStorage(
      LOCALSTORAGE_TOKEN_KEY,
      response.data.token ? response.data.token : null
    );

    if (response.success) {
      setUser(response.data.user)
      return (
        { success: true }

      )
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  }

  const updateUserFriends=async (addFriend,friend)=>{
    if(addFriend){
      const newUser = user.friendships.append(friend)
      setUser(
        {
          user:newUser
        }
      )
    }
    const newFriends = user.friends.filter(
      (f) => f.to_user._id !== friend.to_user._id
    );
    user.friendships=newFriends
    setUser(
      {
        user
      }
    )
  }
  return {
    user,
    login,
    logout,
    loading,
    signup,
    updateUser,
    updateUserFriends
  };
};
