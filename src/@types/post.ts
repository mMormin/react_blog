export type Post = {
  id: number;
  categoryId: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: {
    id: number;
    slug: string;
    name: string;
  };
};
