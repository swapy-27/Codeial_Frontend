export * from '../utils/constants';

export const getFormBody = (params) => {
  
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(params[property]);


    formBody.push(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&'); // swapy=1234&password=1341
}


export const setItemInLocalStorage = (key, value) => {
  if (!key || !value) {
    return console.error('can not store in LS');
  }

  const valueToStore = typeof (value) !== String ? JSON.stringify(value) : value;

  localStorage.setItem(key,valueToStore);
}

export const getItemInLocalStorage = (key) => {

  if (!key) {
    return console.error('can not get value from  LS');
  }

  return localStorage.getItem(key);
}

export const removeItemInLocalStorage = (key) => {
  
  if (!key) {
    return console.error('can not remove value from LS');
  }
  
  localStorage.removeItem(key);
}