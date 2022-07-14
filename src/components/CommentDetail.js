import React from "react";
import PropTypes from "prop-types";

const CommentDetail = props => {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.comment}</div>
    </div>
  );
};

export default CommentDetail;
