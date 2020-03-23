import { text } from '@storybook/addon-knobs';
import React from 'react';
import { SharedGreeter, SharedGreeterProps } from './shared-greeter';

export default {
  component: SharedGreeter,
  title: 'Shared Greeter'
};

export const primary = () => {
  const sharedGreeterProps: SharedGreeterProps = {
    personName: text('Person Name', 'Juri')
  };

  return <SharedGreeter personName={sharedGreeterProps.personName} />;
};
