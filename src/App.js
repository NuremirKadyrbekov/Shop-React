import './App.css';
import Lenevo from '../src/components/Images/Lenevo.jpg'
import Asus from '../src/components/Images/Asus.png'
import { Card } from './components/Card';

function App() {
   
  const date = [
    {
      NameProduct:"Lenovo IdeaPad 3",
      description:"RAM:8,SDD:256gb,display:15.6,intel Celeron",
      prise:"40000som",
      img:Lenevo
    },
    {
      NameProduct:"Asus ZenBook 14",
      description:"RAM:16,SDD:1Tb,display:14HD,AMD Ryzen 7 3700U",
      prise:"120 000som",
      img:Asus
    },
  ]

  
  return (
    <div className="App">
      {
        date.map((el,id)=>{
          return <Card key={id} date={el}/>
        })
      }
    </div>
  );
}

export default App;
