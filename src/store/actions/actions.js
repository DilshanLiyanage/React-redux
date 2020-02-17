

export const ageUpAsyn = (val) => {
    return { type: 'ADD', payload: val };
}


export const ageUp = (val) => {
    return dispatch => {
        setTimeout(()=>{
            dispatch(ageUpAsyn(val));
        }, 3000)    

    }
}


export const ageDownAsyn = (val) => {
    return { type: 'SUB', payload: val };
}


export const ageDown = (val) => {
    return dispatch => {
        setTimeout(()=>{
            dispatch(ageDownAsyn(val));
        }, 3000)    

    }
}