import React from "react";
import Comment from "./Comment";
// import CommentsList from './CommentsList';

const commentsData = [
  {
    name: "Tanya",
    text: "Amazing video",
    replies: [],
  },
  {
    name: "Tanya",
    text: "Amazing video",
    replies: [
      {
        name: "Tanya",
        text: "Amazing video",
        replies: [],
      },
    ],
  },
  {
    name: "Tanya",
    text: "Amazing video",
    replies: [],
  },
  {
    name: "Tanya",
    text: "Amazing video",
    replies: [],
  },
];
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContaine = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContaine;
