import { Counter, CounterRed, Form, TimerPadre, User } from './components';

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <br />
      <User />
      <h2>useEffect - useRef</h2>
      <hr />
      <TimerPadre />
      <h2>useReducer</h2>
      <hr />
      <CounterRed />
      <br />
      <h2>Custom Hooks</h2>
      <hr />
      <Form />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
