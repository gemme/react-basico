import { configureStore } from '@reduxjs/toolkit'


interface State {
    count: number
}

interface Action {
    type: string;
}

const reducer = (state:State = {count:0}, action:Action) =>{
    switch(action.type){
        case 'INCREMENT_COUNT':
            return {
                ...state,
                count: state?.count + 1 
            }
        case 'DECREMENT_COUNT':
            return {
                ...state,
                count: state?.count - 1 
            }
        default:
            return state;
    }
}

export default configureStore({
  reducer: {
    counter: reducer
  },
})