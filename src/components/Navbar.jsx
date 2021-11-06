import React from 'react';

export default function Navbar() {
  const [total, setTotal] = React.useState(0);
  return (
    <h1>
      💕 Task Tracker <span className="round">{total}</span>
    </h1>
  );
}
