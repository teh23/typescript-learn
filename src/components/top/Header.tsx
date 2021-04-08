import React, { ChangeEvent} from 'react'
import { useDispatch } from 'react-redux'

interface IHeader {
    addNote(name: string) : void
}

export const Header = ({addNote} : IHeader) => {
    const [note, setNote] = React.useState('')
    const dispatch = useDispatch()

    const changeNote = (e:ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value)
    }

    const clickAddNote = () => {

        dispatch(addNote(note))
        setNote('')
    }
    

    return (
        <div>
            <input onChange={changeNote} value={note} type="text" name="note" />
            <button className="btn p-2 border-2" onClick={clickAddNote}>Add note</button>
        </div>
    )
}


