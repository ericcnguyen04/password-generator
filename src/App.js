
import './App.css';
import {useState} from 'react';

function App() {
  const [password, setPassword] = useState('');

  

  function generatePassword(length) {
    // Define the characters that can be used in the password
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[]|:;<>,.?/";
  
    let oldPassword = "";
    for (let i = 0; i < length; i++) {
      // Generate a random index to select a character from the available characters
      const randomIndex = Math.floor(Math.random() * characters.length);
  
      // Append the selected character to the password
      oldPassword += characters.charAt(randomIndex);
    }
    
    setPassword(oldPassword)
  }
  
  // Example usage
  // const newPass = generatePassword(10); // Generate a password with a length of 10 characters
  // console.log(newPass);

  return (
    <div>
      <header className="App-header">
        <div className='header'>
          <h1>
            Password Generator
          </h1>
        </div>

        <div>
        <div className='output'>
          {password}
        </div>
        </div>

        <div className="button-box">
          <button className="ten" onClick={() => generatePassword(10)}>Border change</button>
        </div>
      </header>
    </div>
  );
}

export default App;
