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
