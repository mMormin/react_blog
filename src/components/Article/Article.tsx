import DOMPurify from 'dompurify';
import { PostWithoutCategory } from '../../@types/post';
import './Article.scss';

type ArticleProps = {
  post: PostWithoutCategory;
};

function Article({ post }: ArticleProps) {
  const pure = DOMPurify.sanitize(post.excerpt);
  return (
    <article className="article">
      <h2 className="article-title">{post.title}</h2>
      <p
        className="article-excerpt"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: pure }}
      />
    </article>
  );
}

export default Article;
