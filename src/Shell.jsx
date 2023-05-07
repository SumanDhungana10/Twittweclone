 import Home from './pages/Home';
 import Nav from './components/Nav';
 import About from './pages/About';
 import SingleTweet from './pages/SingleTweet'
 import './App.css';
 import { Route,BrowserRouter,Routes} from "react-router-dom";
 const Shell =()=>
 {
    return (
        <>
        <Nav/>
        <BrowserRouter>
        <Routes>
        <Route index element ={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/tweet/:id" element={<SingleTweet/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
 }
 export default Shell;