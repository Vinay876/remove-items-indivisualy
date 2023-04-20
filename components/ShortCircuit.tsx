import * as React from 'react';
export default function ShortCircuit() {
  const [demo, SetDemo] = React.useState('');
  return (
    <div>
      <h1>{demo || <h1>mast</h1>}</h1>
    </div>
  );
}
