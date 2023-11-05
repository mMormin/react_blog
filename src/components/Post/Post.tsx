import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Post as TPost } from '../../@types/post';
import './Post.scss';

type PostProps = {
  post: TPost;
};

function Post({ post }: PostProps) {
  const pure = DOMPurify.sanitize(post.excerpt);
  return (
    <article className="post">
      <Link to={`/article/${post.id}`}>
        <h2 className="post-title">{post.title}</h2>
        <div className="post-category">{post.category.slug}</div>
        <p
          className="post-excerpt"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: pure }}
        />
      </Link>
    </article>
  );
}

export default Post;
