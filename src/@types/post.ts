import { Category } from './category';

export type Post = {
  id: number;
  categoryId: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
};

export type PostWithoutCategory = Omit<Post, 'category'>;
