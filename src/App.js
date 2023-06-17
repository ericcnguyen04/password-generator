import logo from './logo.svg';
import './App.css';

function App() {

  function generatePassword(length) {
    // Define the characters that can be used in the password
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[]|:;<>,.?/";
  
    let password = "";
    for (let i = 0; i < length; i++) {
      // Generate a random index to select a character from the available characters
      const randomIndex = Math.floor(Math.random() * characters.length);
  
      // Append the selected character to the password
      password += characters.charAt(randomIndex);
    }
  
    return password;
  }
  
  // Example usage
  const password = generatePassword(10); // Generate a password with a length of 10 characters
  console.log(password);


  return (
    <div>
      <header className="App-header">
        <div className='header'>
          <h1>
            Password Generator
          </h1>
        </div>

        <div className='output'>
          joisju
        </div>

        <div class="button-box">
          <button class="ten">Border change</button>
        </div>
      </header>
    </div>
  );
}

export default App;
