import React, { useContext, useReducer } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import NotesContext from './context';
import NotesReducer from './reducer';
import Navbar from './components/Navbar';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import EditNote from './components/EditNote';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const rowStyle = {
    padding: '10px',
  };

  const initialState = useContext(NotesContext);
  const [state, dispatch] = useReducer(NotesReducer,initialState)
  
  return (
    <NotesContext.Provider value={{state, dispatch}}>
       <Navbar /> 
       {state.currentNote === null ? (
         <Container>
           <AddNote />
          <NoteList />
         </Container>
       ) : <EditNote /> }

    </NotesContext.Provider>
  );
}

export default App;
