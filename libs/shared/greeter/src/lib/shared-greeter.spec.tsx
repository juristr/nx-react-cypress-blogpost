import React from 'react';
import { render } from '@testing-library/react';

import SharedGreeter from './shared-greeter';

describe(' SharedGreeter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedGreeter />);
    expect(baseElement).toBeTruthy();
  });
});
