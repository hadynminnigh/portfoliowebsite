import React from 'react';
import styles from 'BlockContainer.module.css';

interface BlockContainerProps {
  title: string;
  content: string;
}

const BlockContainer: React.FC<BlockContainerProps> = ({ title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default BlockContainer;