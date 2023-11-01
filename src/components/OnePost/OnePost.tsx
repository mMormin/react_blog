import { Post } from '../../@types/post';
import './OnePost.scss';

type OnePostProps = {
  post: Post;

  zenMode: number;
};

function OnePost({ post, zenMode }: OnePostProps) {
  return (
    <article className={zenMode === 1 ? 'full-width' : 'post'}>
      <h2 className="post-title">{post.title}</h2>
      <div className="post-category">{post.category.slug}</div>
      <p className="post-excerpt">{post.excerpt}</p>
    </article>
  );
}

export default OnePost;
