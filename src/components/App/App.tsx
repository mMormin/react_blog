import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';

import './App.scss';

import categoriesData from '../../data/categories';
import postsData from '../../data/posts';

function App() {
  const [zenMode, setZenMode] = useState(0);

  return (
    <div className={`app ${zenMode === 1 ? 'zen-mode' : ''}`}>
      <Header categories={categoriesData} setZenMode={setZenMode} />
      <Posts posts={postsData} setZenMode={zenMode} />
      <Footer />
    </div>
  );
}

export default App;
