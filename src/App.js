import React from 'react';
import Nav from './Components/Nav'
import Form from './Components/Form'
//css
import './App.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Form/>
      </header> 
    </div>
  );
}

export default App;
