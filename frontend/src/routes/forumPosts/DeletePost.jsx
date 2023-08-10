export async function action({ params }) {
  console.log(params);
  const response = await fetch(`/api/posts/${params.postId}`, {
    method: "DELETE",
  });
  return null;
}
