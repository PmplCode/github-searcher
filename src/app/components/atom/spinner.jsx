import React from "react";

export const Spinner = () => (
  <div
    role="status"
    className="absolute top-[10vw] left-1/2 transform -translate-x-1/2 "
  >
    <span className="loading loading-spinner loading-lg"></span>
  </div>
);
