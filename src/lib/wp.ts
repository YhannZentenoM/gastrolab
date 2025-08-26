const domain = import.meta.env.WP_DOMAIN;
const apiUrl = `${domain}/wp-json/wp/v2`;

export const getPosts = async (category: string) => {
  const response = await fetch(`${apiUrl}/posts?categories=${category}`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  const result = await response.json();
  if (!result.length) {
    throw new Error('No posts found');
  }
  const posts = result.map((post: any) => ({
    title: post.title.rendered,
    content: post.content.rendered,
  }));

  return posts.reverse();
};

export const getLatestPost = async ({
  perPage = 10,
  category,
}: { perPage?: number; category?: string } = {}) => {
  const response = await fetch(
    `${apiUrl}/posts?per_page=${perPage}&categories=${category}&_embed`
  );
  console.log(response);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  const result = await response.json();

  if (!result?.length) {
    console.error('No posts found');
  }
  const posts = result?.map((post: any) => ({
    title: post.title.rendered,
    content: post.excerpt.rendered,
    image: post._embedded['wp:featuredmedia'][0].source_url,
    slug: post.slug,
  }));
  return posts;
};

export const getPostSlug = async (slug: string) => {
  const response = await fetch(`${apiUrl}/posts?slug=${slug}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  const [result] = await response.json();
  const {
    title: { rendered: title },
    content: { rendered: content },
  } = result;
  return {
    title,
    content,
  };
};
