import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import './Root.scss';

import { Category } from '../../@types/category';
import { useAsyncFetch } from '../../hooks/useAsyncFetch';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Root() {
  const [zenMode, setZenMode] = useState(false);

  const { data: categories } = useAsyncFetch<Category[]>(
    'https://oblog-react.vercel.app/api/categories'
  );

  return (
    <div className={`root ${zenMode ? 'zen-mode' : ''}`}>
      <Header
        categories={categories || []}
        zenMode={zenMode}
        setZenMode={setZenMode}
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
