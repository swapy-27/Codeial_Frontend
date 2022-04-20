
import { useEffect } from 'react';
import '../styles/App.css';
import { getPost } from '../api';
function App() {

  useEffect ( ()=>{
    const fetchPosts = async ()=>{
      const posts = await getPost()
      console.log(posts)
    }

    fetchPosts();

  });

  return (
    <div className="App">
      hello world
    </div>
  );
}

export default App;
