import React from "react";

export default function Navigation({ userName }) {
  return (
    <nav>
      <div className="nav-title">Pizza Calculator!</div>
      <div className="nav-user">{userName}</div>
    </nav>
  );
}
