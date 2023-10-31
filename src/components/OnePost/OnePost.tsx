import { Post } from '../../@types/post';
import './OnePost.scss';

type OnePostProps = {
  post: Post;
};

function OnePost({ post }: OnePostProps) {
  return (
    <article className="post">
      <h2 className="post-title">{post.title}</h2>
      <div className="post-category">{post.category.slug}</div>
      <p className="post-excerpt">{post.excerpt}</p>
    </article>
  );
}

export default OnePost;
