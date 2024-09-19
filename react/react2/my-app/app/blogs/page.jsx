
import Link from "next/link";
const Blogs = () => {
  const blogs = [
    { title: "My first post", slug: "my-first-post" },
    { title: "My second post", slug: "my-second-post" },
    { title: "My third post", slug: "my-third-post" },
  ];
  return (
    <div>
      <h1>Blog list</h1>
      {blogs.map((blog) => (
        <li key={blog.slug}>
          <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
        </li>
      ))}
    </div>
  );
};
export default Blogs;
