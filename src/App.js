import logo from "./logo.svg";
import "./App.css";
// import { getUserdatFromToken } from "./lenskart-utils/lenskart-utils";
// let token =
//   "eyJzcmMiOiJhdXRoLXNlcnZpY2UiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzAyMDc0NjgsImV4cCI6MTYzMDI5Mzg2OCwidXNlciI6IntcImlkXCI6MTYwLFwicGhvbmVcIjpcIjg4MDIwMjcyMzRcIixcInBob25lQ29kZVwiOlwiKzkxXCIsXCJlbWFpbFwiOlwiYXJ2aW5kLmthdGhlcml5YTFAbGVuc2thcnQuaW5cIixcImVtcENvZGVcIjpcIkxTUDA0ODcyXCIsXCJjaGFuZ2VQYXNzd29yZFwiOmZhbHNlLFwidXNlck5hbWVcIjpcIkFydmluZCBLYXRoZXJpeWFcIn0iLCJwZXJtaXNzaW9ucyI6IntcInBlcm1pc3Npb25zTWFwXCI6e1wibmV4c19zZWFyY2hcIjp7XCJBTExcIjpbXCIqXCJdfSxcIm5leHNfcG9fYXBpXCI6e1wiQUxMXCI6W1wiKlwiXX0sXCJuZXhzX2dyblwiOntcIkFMTFwiOltcIipcIl19fX0ifQ.F_-bOJ7vfK1GC1E6NzsRzWNkd-lXpPy-cp7D5_zXW_8";

function App() {
  // console.log("isTokenExpired : ", getUserdatFromToken(token));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
