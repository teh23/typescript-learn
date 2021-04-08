import React from 'react'
import { useSelector } from 'react-redux'
import {INotes} from '../../reducers/noteReducer' 


export const Content = () => {
    const notes = useSelector<INotes, INotes["notes"]>((state) => state.notes)

    return (
        <div>
          
            <ul className="m-5">
                {notes.map((note) =>{
                    return(
                        <li key={note}>{note}</li>
                    )
                })}
            </ul>
        </div>
    )
}


