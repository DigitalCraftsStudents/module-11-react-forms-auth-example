
import './App.css';
import AuthService from "./lib/AuthService";

function App() {
  checkCredentials(username, password) {
    AuthService.login(username, password)
  }

  return (
    <div className="App">
      {/* Login form will go here */}
    </div>
  );
}

export default App;
