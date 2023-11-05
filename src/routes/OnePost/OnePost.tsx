import { useParams } from 'react-router-dom';
import { useAsyncFetch } from '../../hooks/useAsyncFetch';
import { Post } from '../../@types/post';
import Spinner from '../../components/Spinner/Spinner';
import Article from '../../components/Article/Article';

function OnePost() {
  const { id } = useParams();

  if (!id) {
    throw new Error('Aucun id fourni');
  }

  const {
    data: post,
    isLoading,
    error,
  } = useAsyncFetch<Post[]>(`https://oblog-react.vercel.app/api/posts/${id}`);

  if (error) {
    throw error;
  }

  return (
    <main className="main--article">
      {isLoading ? <Spinner /> : <Article post={post || []} />}
    </main>
  );
}

export default OnePost;
