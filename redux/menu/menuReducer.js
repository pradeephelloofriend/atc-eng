import { menuActionTypes } from './menuActionTypes'

const INITIAL_STATE = {
ref:null,
tabKey:'1'
    
}
const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case menuActionTypes.SET_MENU_REF:
            return {
                ...state,
                ref: action.payload,
                
            };
            case menuActionTypes.SET_TAB_KEY:
                return {
                    ...state,
                    tabKey: action.payload,
                    
                };   
            
            
                   
        default:
            return state
    }
}
export default menuReducer;