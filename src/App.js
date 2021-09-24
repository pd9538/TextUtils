import React, {useState} from 'react'
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//whether 
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }
  const toggleMode=(cls)=>
  {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
  <>
  {/* <Navbar title="TextUtils" aboutText="About us"/>   */}
{/* <Navbar/> */}
<Alert alert={alert}/>
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
<Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} header="Try TextUtils - Word Counter, Character Counter" mode={mode}/>
          </Route>
        </Switch>
        </div>
        </Router>
  

  </>
    );
}

export default App;
