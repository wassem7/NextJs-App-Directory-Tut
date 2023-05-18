import React, { FC } from 'react';

interface pageProps {
  params: {
    postId: string;
  };
}
const postPage: FC<pageProps> = ({ params }) => {
  console.log(params);

  return <div>{params.postId}</div>;
};

export default postPage;
