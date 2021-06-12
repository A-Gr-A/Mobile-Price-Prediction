// import logo from './logo.svg';
import './App.css';
import chart from './logo4.svg';
// import {Button} from '@material-ui/core'
import UserForm from './components/UserForm'
function App() {
  return (
    <div className="App">
      <img src={chart} style={{maxWidth:"761.98px",width:"100%"}} alt='chart' className='chart-logo'></img>
      <h1 style={{color:'#f9cec3',marginTop:'0px'}}>AGrA</h1>
      <UserForm/>
    </div>
  );
}

export default App;
