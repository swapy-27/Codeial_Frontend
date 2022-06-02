
import { useEffect, useState } from 'react';
import '../styles/App.css';
import { getPost } from '../api';
import { Loader, Navbar } from './index';
import { Home, Settings, Register, UserProfile } from '../pages';
import { Login } from '../pages';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import { useAuth } from '../hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {

  const auth = useAuth();
  return auth.user ? children : <Navigate to='/login' />
}


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


        <Navbar />
        <ToastContainer />

        <Routes>

          <Route exact path='/' element={<Home posts={posts} />} />
          
          <Route exact path='/login' element={<Login />} />

          <Route exact path='/register' element={<Register />} />

          <Route exact path='/settings' element={<PrivateRoute ><Settings /></PrivateRoute>} />

          <Route exact path='/user/:userId' element={<PrivateRoute ><UserProfile /></PrivateRoute>} />

        </Routes>





      </Router>
    </div>
  );
}

export default App;
