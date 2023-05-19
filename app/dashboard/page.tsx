import axios from 'axios';
import React, { FC } from 'react';

// export const revalidate = 3
const Dashboard = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts/1',
    { next: { revalidate: 10 } }
  );

  const data = JSON.stringify(await res.json());
  return <div>{data}</div>;
};

export default Dashboard;
