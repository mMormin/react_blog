import { useParams } from 'react-router-dom';
import { useAsyncFetch } from '../../hooks/useAsyncFetch';
import { PostWithoutCategory } from '../../@types/post';
import Spinner from '../../components/Spinner/Spinner';
import ArticleCpnt from '../../components/Article/Article';

function Article() {
  const { id, slug } = useParams();

  if (!id && !slug) {
    throw new Error('Aucun id ou slug fourni');
  }

  const {
    data: post,
    isLoading,
    error,
  } = useAsyncFetch<PostWithoutCategory>(
    `https://oblog-react.vercel.app/api/posts/${id || slug}`
  );

  if (error) {
    throw error;
  }

  return (
    <main className="main--article">
      {isLoading && <Spinner />}
      {post && <ArticleCpnt post={post} />}
    </main>
  );
}

export default Article;
