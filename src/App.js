
import './App.css';
import {useState} from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [passLength, setPassLength] = useState('12')
  

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
  
  function copyToClipboard() {
    navigator.clipboard.writeText(password); // Copy the password to the clipboard
  }

  return (
    <div>
      <header className="App-header">
        <div className='header'>
          <h1>
            Password Generator
          </h1>
        </div>

        <div>
        <div className='output' onClick={copyToClipboard}>
          {password}
        </div>
        </div>

        <div className="button-box">
          <input type='number' className='length' value={passLength} onChange={(e) => setPassLength(e.target.value)}></input>
          <button className="ten" onClick={() => generatePassword(passLength)}>Generate Password</button>
          <button class="twelve" onClick={copyToClipboard}>Copy</button>
        </div>

        <div className='text'>
        So, what makes a good password? First and foremost, a strong password is long. The longer the password, the harder it is for attackers to crack. It's recommended to use a minimum of 12 characters, combining uppercase and lowercase letters, numbers, and special characters.
        <br></br>
        <br></br>
        Complexity is another critical aspect of a strong password. Avoid using easily guessable information like your name, birthdate, or common words. Instead, opt for a combination of unrelated words, use misspellings, or substitute letters with symbols.
        </div>
      </header>
    </div>
  );
}

export default App;
