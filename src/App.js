import logo from './logo.svg';
import './App.css';
// App is the main component
/*
Browsers can't 'read' JSX 
convensions
  - all element must be closed
  - Empty elements (br, hr, img, input...) must be closed with a slash(/)
  - JSX uses camelCase style(onClick, tabIndex...)
  - Use curly braces to include literal JavaScript
  - Use double curly braces with objects
*/
// spoiler: this is a hook 
import { useState } from 'react';

function App() {
  const [userName,setUserName] = useState('');
  console.log(userName);
  let message = <h2>Welcome to React,<span>{userName}</span></h2>;
  let isEyeClick = true;
  const handleInput = (event) => {
    setUserName(event.target.value);
  }
  //Here is okay
  return (
    
    <main>
      <div>
        {/** Ugly JSX comment */}
        {message}
        
        <input 
          type = {isEyeClick ? 'text' : 'password'}
          placeholder='User Name'
          onChange={handleInput}
        />
      </div>
    </main>

  );
}

export default App;
