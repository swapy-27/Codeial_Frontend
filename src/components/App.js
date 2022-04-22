
import { useEffect, useState } from 'react';
import '../styles/App.css';
import { getPost } from '../api';
import { Loader, Navbar } from './index';
import { Home } from '../pages';
import { Login } from '../pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
  // if (loading) {

  //   return (<Loader />)
  // }
  return (
    <div className="App">

      <Router>
        <Navbar  />

        <Routes>

          <Route  path='/' element={<Home posts={posts}/>}/> 
          <Route  path='/login' element={<Login />}/>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
