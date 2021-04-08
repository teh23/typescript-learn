
export interface INotes {
    notes: string[]
}
const initialState={
    notes: ['asd']
}

interface IAction {
    type: 'ADD_NOTE',
    data: string
}
export const noteReducer = (state : INotes = initialState, action : IAction) =>{
    switch(action.type){
        case "ADD_NOTE":
            console.log(state)
            return {...state, notes : [...state.notes, action.data]}
        default:
            return state
    }
}

export const addNote = (note : string)=>{

    return{
        type: 'ADD_NOTE',
        data: note
    }
}