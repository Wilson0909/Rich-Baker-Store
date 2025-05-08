import './App.css';
import { BrowserRouter as Router,Route, Routes,Link } from 'react-router-dom';
import Home from "./pages/Home";
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import Content from './pages/Content';
import Login from './pages/Login';
import Registration from './pages/Registration';


// disini bakal ada structure routenya aja

function App() {

 
  return (
    <div className="App">
      <Router>
        
        <Routes>
        <Route path="/"element={<Login />}/>
        <Route path="/home"element={<Content />}/>
        <Route path="/login"element={<Login />}/>
        <Route path='/review' element={<Home />}/>
        <Route path="/createpost"element={<CreatePost />}/>
        <Route path="/post/:id"element={<Post />}/>
        <Route path='/registration' element={<Registration />}/>
       
      
        </Routes>
      </Router>
 
      
    </div>
  );
}

export default App;
