import {ADD,REMOVE,UPDATE} from '../types'
const initialState={
    data:['Karem', "10/10/10", "Website", "E-commerce","N/A","N/A","N/A","N/A"]
}
export default  function (state=initialState,action){
    let data =[]
    switch(action.type){
        case ADD :
            return {...state,data:[action.payload]}
            break;
            case REMOVE:
                break;
                case UPDATE:
                    break;
                    default : return state;
    }
}