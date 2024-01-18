import React from 'react';
import './App.css';
import { Editor } from './Components/Editor/Editor';

import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
           <Sidebar></Sidebar>
           <Editor></Editor>

    </div>
  );
}

export default App;
