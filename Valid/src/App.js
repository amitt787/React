import Login from './Components/Login';
import User from './Components/User';
import Members  from './Components/Members';
import './App.css';

function App() {
  function getData(){
    alert("hello");
  }
  return (
    <div className="App">
    <User data={getData}/>
    <p>hello</p>
    <div style={{float:'right'}}>
    <Members data={getData}/>
    </div>
    </div>
  );
}

export default App;
