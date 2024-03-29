export const Set_User_Name= 'Set_User_Name';
export const Set_User_Age= 'Set_User_Age';



export const setName= (name: any)=>(dispatch: (arg0: { type: string; payload: any; }) => void) =>{
    dispatch({
        type:Set_User_Name,
        payload:name,
    })
};

export const setAge= (age: any)=>(dispatch: (arg0: { type: string; payload: any; }) => void) =>{
    dispatch({
        type:Set_User_Age,
        payload:age,
    })
};