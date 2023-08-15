import { useFetcher } from "react-router-dom";
import { FaTrash, FaPen } from "react-icons/fa";
import { useState, useRef, useEffect, useContext } from "react";
import { formatTime } from "../../utils";
import { AuthContext } from "../../contexts/AuthContext";

function CommentCard({ comment }) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);
  const fetcher = useFetcher();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEditing]);

  const renderNote = () => {
    if (isEditing) {
      return (
        <fetcher.Form
          method="post"
          action={`/comments/${comment.id}/edit`}
          onSubmit={(e) => setIsEditing(false)}
          className="flex justify-between items-center gap-5"
        >
          <textarea
            name="content"
            className="w-full min-h-[5rem] text-black p-2"
            ref={inputRef}
            defaultValue={comment.content}
          />
          <button className="h-[2rem] w-[2rem] rounded-full border-[1px] border-white my-2 pb-1 px-2">{`>`}</button>
        </fetcher.Form>
      );
    } else {
      return comment.content;
    }
  };
  return (
    <div key={comment.id} className="px-10 py-4 text-white">
      {renderNote()}
      <div className="bottom-0 left-0 w-full flex justify-between">
        <i className="text-slate-300">{formatTime(comment.updatedAt)}</i>
        {!!currentUser && currentUser.id === comment.UserId ? (
          <span className="relative flex items-center gap-2">
            <button
              onClick={() => {
                if (isEditing === true) {
                  setIsEditing(false);
                } else {
                  setIsEditing(true);
                }
              }}
            >
              <FaPen className="relative -top-0.5" />
            </button>
            <fetcher.Form
              method="post"
              action={`/comments/${comment.id}/delete`}
              onSubmit={(event) => {
                if (
                  !confirm("Please confirm you want to delete this record.")
                ) {
                  event.preventDefault();
                }
              }}
            >
              <button>
                <FaTrash />
              </button>
            </fetcher.Form>
          </span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default CommentCard;
