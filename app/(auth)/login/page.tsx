import axios from 'axios';
import React, { FC } from 'react';

const wait = (w: number) =>
  new Promise((resolve) => setTimeout(resolve, w));

const page = async () => {
  await wait(5000);
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );
  return <div>{JSON.stringify(data)}</div>;
};

export default page;
