
import { useEffect, useState } from 'react';
import '../styles/App.css';
import { getPost } from '../api';
import { Loader, Navbar } from './index';
import { Home, Settings,Register } from '../pages';
import { Login } from '../pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [posts, setPost] = useState([]);

  const [loading, setLoading] = useState(true)


  useEffect(() => {

    const fetchPosts = async () => {

      const posts = await getPost();
      
      if (posts.success) {
        setPost(posts.data.posts);
        setLoading(false);
      }
    }

    fetchPosts();

  }, []);
  if (loading) {

    return (<Loader />)
  }
  return (
    <div className="App">

      <Router>
        <ToastContainer  />
        <Navbar />

        <Routes>

          <Route exact path='/' element={<Home posts={posts} />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/settings' element={<Settings />} />
          <Route exact path='/register' element={<Register/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
