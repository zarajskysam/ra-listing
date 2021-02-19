import './App.css';
import './component/main.css';
import { data } from './data/etsy';
import { Listng } from './component/Listng';

console.log(data);
function App() {
  return (
    <Listng items={data}/>
  );
}

export default App;
