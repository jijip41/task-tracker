import React from 'react';

export default function Navbar(props) {
  return (
    <h1>
      💕 Task Tracker <span className="round">{props.total}</span>
    </h1>
  );
}
