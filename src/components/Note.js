import React, {useContext} from 'react';
import NotesContext from '../context';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Note({ note }) {
    const {dispatch} = useContext(NotesContext);
    return(
            <div className="card">
                <div className="note-text">{note.text}</div>
                <div className="btn-container">
                    <button className="btn btn-primary" onClick={() => dispatch({ type: 'SET_CURRENT_NOTE', payload: note})}>Edit</button>
                    <button className="btn btn-danger" onClick={() => dispatch({ type: 'DELETE_NOTE', payload: note.id})}>Delete</button>
                </div>
            </div>
    )
}