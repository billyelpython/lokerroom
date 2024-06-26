import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import NavBar from './NavBar'
import DisplayLobbies from './DisplayLobbies'

function App() {
  return (  
    <Router>
    <NavBar/>
    <Routes>
      <Route path='/' element={<h1 className='entry'>Welcome to Lokerroom, please login or register</h1>}/>
      
      <Route path='/api/auth/register' element={
      <div className='form'>
        <Register/>
      </div>} />

      <Route path='/api/auth/login' element={
      <div className='form'>
        <Login/>
      </div>}/>
      
      <Route path='/api/lobby' element={<>
      <DisplayLobbies/>
      </>}/>

      
    </Routes>
    
    
    
    </Router>
  )
}

export default App
