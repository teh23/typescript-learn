import React from 'react';
import { Content } from './components/bottom/Content';
import {Header} from './components/top/Header';
import { addNote } from './reducers/noteReducer';


function App() {


  return (
    <>
      <Header  addNote={addNote}/>
      <Content/>
    </>
  );
}

export default App;
