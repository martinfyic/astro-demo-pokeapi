// Component creado con SolidJS para utilizar islas con astro

import { createSignal } from "solid-js";

export const Counter = () => {
  const [counter, setCounter] = createSignal(10);

  return (
    <>
      <h1 class='my-2 text-3xl'>Counter</h1>
      <h3 class='my-2 text-2xl'>
        Value: <span class='font-bold text-blue-200'>{counter()}</span>
      </h3>

      <button
        onClick={() => setCounter(c => c - 1)}
        class='mx-7 border-spacing-2 rounded-xl border border-blue-700 bg-blue-500 px-4 py-2 transition-colors duration-300 hover:bg-blue-400'
      >
        - 1
      </button>
      <button
        onClick={() => setCounter(c => c + 1)}
        class='mx-7 border-spacing-2 rounded-xl border border-blue-700 bg-blue-500 px-4 py-2 transition-colors duration-300 hover:bg-blue-400'
      >
        + 1
      </button>
    </>
  );
};
