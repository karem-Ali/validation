import {ADD,REMOVE,UPDATE} from '../types'
export const  AddProject=(name,date,service,features,complexity,platforms,users,total)=>dispatch=>{

    dispatch({
        type:ADD,
        payload:{
            name,
            date,
            service,
            features,
            complexity,
            platforms,
            users,
            total
            
        }
    })
   
}