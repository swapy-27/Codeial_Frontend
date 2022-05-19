
import { useEffect, useState } from 'react';
import '../styles/App.css';
import { getPost } from '../api';
import { Loader, Navbar } from './index';
import { Home, Settings, Register, UserProfile } from '../pages';
import { Login } from '../pages';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks';



function PrivateRoute({ children, ...rest }) {
  const navigate = useNavigate();
  const auth = useAuth();
  return (
    <Route
      {...rest}

      render={() => {
        if (auth.user) {
          return children;
        }
        return navigate('/login')
      }}


    />
  )
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
       
        <Routes>

          <Route exact path='/' element={<Home posts={posts} />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/settings' element ={<Settings/>}/>
          <Route exact path='/register' element ={ <Register />}/>
          {/* <PrivateRoute exact path='/register'>
          <Register />
        </PrivateRoute>

        <PrivateRoute exact path='/settings'>
          <Settings />
        </PrivateRoute>
        <PrivateRoute exact path="/user/:userId">
          <UserProfile />
        </PrivateRoute> */}
        </Routes>

        



      </Router>
    </div>
  );
}

export default App;
