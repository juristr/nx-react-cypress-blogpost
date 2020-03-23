import React from 'react';

import './app.scss';

import { ReactComponent as Logo } from './logo.svg';
import { SharedGreeter } from '@mynxworkspace/shared/greeter';

export const App = () => {
  const personName = 'Juri';
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  return (
    <div className="app">
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to my2ndreactapp!</h1>
      </header>
      <main>
        <SharedGreeter personName={personName} />
      </main>
    </div>
  );
};

export default App;
