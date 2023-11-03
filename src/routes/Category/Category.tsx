import { useParams } from 'react-router-dom';
import { useAsyncFetch } from '../../hooks/useAsyncFetch';
import { Post } from '../../@types/post';
import Spinner from '../../components/Spinner/Spinner';
import Posts from '../../components/Posts/Posts';

function Category() {
  const { slug } = useParams();

  if (!slug) {
    throw new Error('Aucun slug fourni');
  }

  const {
    data: posts,
    isLoading,
    error,
  } = useAsyncFetch<Post[]>(
    `https://oblog-react.vercel.app/api/posts?categorySlug=${slug}`
  );

  if (error) {
    throw error;
  }

  return <main>{isLoading ? <Spinner /> : <Posts posts={posts || []} />}</main>;
}

export default Category;
