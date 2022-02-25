import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  const classes =
    props.type === "secondary"
      ? "flex items-center px-4 py-2 bg-gray-100 border border-gray-300 text-gray-500 rounded cursor-pointer hover:bg-gray-200"
      : "flex items-center px-4 py-2 bg-indigo-900 text-white rounded cursor-pointer hover:bg-indigo-700";

  if (props.to) {
    return (
      <Link {...props} className={classes}>
        {props.children}
      </Link>
    );
  }

  return (
    <div {...props} className={classes}>
      {props.children}
    </div>
  );
}
