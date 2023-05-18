export const SET_EMAIL = 'SET_EMAIL';
export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_COUNTRY_NAME = 'SET_COUNTRY_NAME';

export const setEmail = (email:string) => {
        return{
            type:SET_EMAIL,
            payload:email
        }
}

export const setFname = (fname:string) => {
    return{
        type:SET_FIRST_NAME,
        payload:fname
    }
}

export const setLname = (lname:string)=> {
    return{
        type:SET_LAST_NAME,
        payload:lname
    }
}

export const setPw = (pw:string) => {
    return{
        type:SET_PASSWORD,
        payload:pw
    }
}

export const setCountry = (country:string)=>{
        return{
        type:SET_COUNTRY_NAME,
        payload:country
    }
}


