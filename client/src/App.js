// import logo from './logo.svg';
import './App.css';
import chart from './logo4.svg';
import {Button} from '@material-ui/core'
import UserForm from './components/UserForm'
function App() {
  return (
    <div className="App">
      <img src={chart} alt='chart' className='chart-logo'></img>
      <h1 style={{color:'#f9cec3',marginTop:'0px'}}>AGrA</h1>
      <Button variant="contained" style={{backgroundColor:'#f9cec3'}}>Click to Predict
      </Button>
      <UserForm/>
    </div>
  );
}

export default App;
