import logo from './logo.svg';
import './App.css';
import Square from './shapes/Square';
import Circle from './shapes/Circle';
import Cone from './shapes/Cone';
import Cube from './shapes/Cube';
import Sphere from './shapes/Sphere';
import Triangle from './shapes/Triangle';




function App() {
  return (
    <div >
      <Square value={10} />
      <Circle value={20} />
      <Cone r={6.5} l={19}  />
      <Sphere value={25} />
      <Cube value={15} />
      {/* <Triangle base={10} height={14} /> */}
      <Triangle a={5} b={12} c={10} />



    </div>
  );
}

export default App;
