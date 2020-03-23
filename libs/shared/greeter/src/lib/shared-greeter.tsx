import React from 'react';

import './shared-greeter.scss';

export interface SharedGreeterProps {
  personName: string;
}

export const SharedGreeter = (props: SharedGreeterProps) => {
  return (
    <div>
      <h1 data-cy="greeting">Hi there, {props.personName}!</h1>
    </div>
  );
};

export default SharedGreeter;
