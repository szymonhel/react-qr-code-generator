// @flow
import * as React from 'react';

type Props = {
  onSubmit: (_: string) => void;
  generatedValue: string;
};
export const SearchBar = (props: Props) => {
  const [val, setVal] = React.useState('');

  return (
    <div className="flex justify-center w-100 md:space-x-8 p-5 flex-col justify-between md:flex-row md:justify-center ">
      <input
        className="py-2 px-3 border rounded border-gray-500 w-full w-1/2 md:w-1/2 mb-4 md:mb-0"
        type="text"
        placeholder="Type value"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button
        disabled={props.generatedValue === val}
        className={
          'bg-sky-500/100 px-4 py-2  disabled:bg-sky-300  hover:bg-sky-600  rounded-md text-white '
        }
        onClick={() => props.onSubmit(val)}>
        Generate
      </button>
    </div>
  );
};
