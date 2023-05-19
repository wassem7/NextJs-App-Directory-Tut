import React, { FC, ReactNode } from 'react';

interface layoutProps {
  children: ReactNode;
}
const layout: FC<layoutProps> = ({ children }) => {
  return <div className='bg-green-500'>{children}</div>;
};

export default layout;
