import { useState } from 'react';
import './App.css';
function App() {
  const [name, setName] = useState('');
  return (
    <div className='App'>
      <h1>Hi there!</h1>
      <p>Whats your name?</p>
      <input type="text" placeholder="type your name..." value={name} />
      <h1>Helo {name}!</h1>
    </div>
  )
}

export default App
