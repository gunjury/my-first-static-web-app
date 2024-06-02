import React from 'react';

function App() {
  const value = 'World';
  return <>
    <div>Hello {value}</div>
  <button onClick={e => alert('foo')}>Call api</button>
    </>;
}

export default App;
