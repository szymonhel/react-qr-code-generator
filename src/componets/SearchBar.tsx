// @flow
import * as React from 'react';

type Props = {
  onSubmit: (value: string) => void;
};
export const SearchBar = (props: Props) => {
  const [val, setVal] = React.useState('');

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={() => props.onSubmit(val)}>Submit</button>
    </div>
  );
};
