export async function action({ params }) {
  const response = await fetch(`/api/posts/${params.postId}`, {
    method: "DELETE",
  });
  return null;
}
