import './App.css';
import Converter from './Components/Converter';
function App() {
  return (
    <div className="App">
      {/* <label>Darksteel</label>
      <input type='number' value={darksteel} onChange={({ target: { value } }) => SetDarksteel(value)} />
      <p>*Not including fee: 1000 darksteel</p>
      <h3>Draco: {ConvertedValue.draco} (you can only trade a whole draco, broken numbers for comparisson only)</h3>
      <h3>Dollar: {ConvertedValue.value}</h3>
      <h3>BRL: {(ConvertedValue.value * DollarInBRL).toFixed(5)}</h3> */}
      <Converter />
    </div>
  );
}

export default App;
