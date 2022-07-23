export const saveLocalData = (key, data) =>{
    if(key && data){
        localStorage.setItem(key, JSON.stringify(data));
    }
}

export const getLocalData = (key) =>{
    const data  = JSON.parse(localStorage.getItem(key));
    return data;
}