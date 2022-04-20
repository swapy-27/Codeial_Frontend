
import { useEffect, useState } from 'react';
import '../styles/App.css';
import { getPost } from '../api';
import Loader from './Loader';
import { Home } from '../pages';
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
      <Home />
    </div>
  );
}

export default App;
