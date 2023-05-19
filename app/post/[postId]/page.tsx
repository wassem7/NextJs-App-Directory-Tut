import React, { FC } from 'react';

interface pageProps {
  params: {
    postId: string;
  };
}

export async function generateStaticParams() {
  const posts = ['post one', 'post two'];

  return posts.map((post) => {
    return {
      postId: post,
    };
  });
}
const postPage: FC<pageProps> = ({ params }) => {
  console.log(params);

  return <div>{params.postId}</div>;
};

export default postPage;
