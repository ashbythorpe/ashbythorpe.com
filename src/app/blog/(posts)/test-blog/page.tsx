import BlogPost from "@/app/ui/blogpost";
import Post from "./post.mdx";

export default async function Page(props: {
  params: Promise<{ page?: string }>;
}) {
  const { page } = await props.params;
  return (
    <BlogPost name="test-blog" page={page}>
      <Post />
    </BlogPost>
  );
}
