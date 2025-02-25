import "./App.css";
import reactLogo from './assets/react.svg'

const now = new Date()
const App = () => {
  console.log('logitusta...')


  return (
    <div>
      <h1>Tervetuloa React-sivulle!</h1>
      <p>Tämä on React-sivu, jossa käytetään CSS:ää.</p>

      <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <p>Today is {now.toString()}</p>
    </div>
  );
};

export default App;
