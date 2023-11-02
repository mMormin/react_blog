import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';

import './App.scss';

// import categoriesData from '../../data/categories';
// import postsData from '../../data/posts';
import Spinner from '../Spinner/Spinner';
import { Post } from '../../@types/post';
import { Category } from '../../@types/category';
import { useAsyncFetch } from '../../hooks/useAsyncFetch';

function App() {
  const [zenMode, setZenMode] = useState(false);
  const { data: posts, isLoading } = useAsyncFetch<Post[]>(
    'https://oblog-react.vercel.app/api/posts'
  );

  const { data: categories } = useAsyncFetch<Category[]>(
    'https://oblog-react.vercel.app/api/categories'
  );

  return (
    <div className={`app ${zenMode ? 'zen-mode' : ''}`}>
      <Header
        categories={categories || []}
        zenMode={zenMode}
        setZenMode={setZenMode}
      />
      {isLoading && <Spinner />}
      <Posts posts={posts || []} setZenMode={zenMode} />
      <Footer />
    </div>
  );
}

export default App;
