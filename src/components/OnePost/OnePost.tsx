import DOMPurify from 'dompurify';
import { Post as TPost } from '../../@types/post';
import './OnePost.scss';

type OnePostProps = {
  post: TPost;
};

function OnePost({ post }: OnePostProps) {
  const pure = DOMPurify.sanitize(post.excerpt);
  return (
    <article className="post">
      <h2 className="post-title">{post.title}</h2>
      <div className="post-category">{post.category.slug}</div>
      <p
        className="post-excerpt"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: pure }}
      />
    </article>
  );
}

export default OnePost;
