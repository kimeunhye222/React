
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './example/Home.jsx'
import Join from './example/Join.jsx'
import Login from './example/Login.jsx'
import {Route, Routes,BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(

   <div>
    <BrowserRouter>
     <Routes>
    <Route path='/' element={ <Home></Home>}></Route>
    <Route path='/join' element={<Join></Join>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
    
)
