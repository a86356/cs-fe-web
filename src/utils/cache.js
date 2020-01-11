export const setCacheData= (k,v) =>{
  var storage=window.localStorage;

  storage.setItem(k,v)
}

export const getCacheData=key=> {
  return window.localStorage.getItem(key);
}

export const clearCacheData=arrkeys=> {
  var storage=window.localStorage;

  for (let i = 0; i < arrkeys.length; i++) {
    storage.removeItem(arrkeys[i]);
  }
}
