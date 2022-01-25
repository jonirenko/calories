import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [intensity, setIntensity] = useState(0);
  const [sex, setSex] = useState(0);
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let calories = 0;
    if(sex === "male") {
      calories = (879 + 10.2 * weight) * intensity;
    } else {
      calories = (795 + 7.18 * weight) * intensity;
    }
    setResult(calories);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
        <label>Intensity</label>
        <select onChange={e => setIntensity(e.target.value)}>
          <option value="1.3">Light</option>
          <option value="1.5">Usual</option>
          <option value="1.7">Moderate</option>
          <option value="2.0">Hard</option>
          <option value="2.2">Very hard</option>
        </select>
      </div>
      <div>
        <label>Sex</label>
        <label><input type="radio" name="sex" value="male" defaultChecked onChange={e => setSex(e.target.value)} />Male</label>
        <label><input type="radio" name="sex" value="female" onChange={e => setSex(e.target.value)}/>Female</label>
      </div>
      <div>
        <label>Calories</label>
        <output>{result.toFixed(0)}</output>
      </div>
      <button>Calculate</button>
    </form>
  );
}

export default App;
