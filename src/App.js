
import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const[{},dispatch]=useStateValue();
  useEffect(()=>{
   auth.onAuthStateChanged(authUser=>{
    console.log('The user is>>>',authUser);
    if(authUser){
      //The user is/was logged in
      dispatch({
        type:'SET_USER',
        user:authUser

      })
    }
    else{
      // the user is logged out
      dispatch({
        type:'SET_USER',
        user:null
      })
    }
   })
  })
  return (
    //BEM
    <Router>
    <div className="app">

      <Routes>
       <Route path='/login' element={[<Login/>]}/>
      <Route path='/checkout' element={<> <Checkout/>  </>}/>
        <Route path='/' element={<> <Home/> <Header/></>}/>
      
      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
