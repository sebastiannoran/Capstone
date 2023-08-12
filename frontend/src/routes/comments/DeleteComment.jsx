export async function action({ params }) {
  const response = await fetch(`/api/comments/${params.commentId}`, {
    method: "DELETE",
  });
  return null;
}
