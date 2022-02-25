import React from "react";

export default function TitleBlock(prop) {
  return (
    <div className="mb-3 p-2 bg-gray-100 text-lg text-main-light font-bold">
      {prop.children}
    </div>
  );
}
