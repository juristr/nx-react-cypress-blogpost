import React from 'react';

import './shared-greeter.scss';

export interface SharedGreeterProps {
  name: string;
}

export const SharedGreeter = (props: SharedGreeterProps) => {
  return (
    <div>
      <h1>Hi there, {props.name}</h1>
    </div>
  );
};

export default SharedGreeter;
