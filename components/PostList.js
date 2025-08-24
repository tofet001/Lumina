import { useEffect, useState } from 'react';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts').then(res => res.json()).then(setPosts);
  }, []);

  return (
    <section>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <b>{post.author.name}</b>: {post.text}
            {post.verse && (
              <span className="bible-verse">{post.verse}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}