import { data } from './data/etsy';
import { Listng } from './component/Listng';

function App() {
  return (
    <Listng items={data}/>
  );
}

export default App;
