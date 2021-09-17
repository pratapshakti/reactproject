import React from "react";
import { observer, useLocalObservable } from "mobx-react-lite";

const Mobx = observer(() => {
  const store = useLocalObservable(() => ({
    count: 1,
    addOne() {
      store.count++;
    },
    subOne() {
      store.count--;
    },
  }));

  function addOneHandle() {
    store.addOne();
  }
  function subOneHandle() {
    store.subOne();
  }

  return (
    <div>
      <h1>Count: {store.count}</h1>
      <button onClick={addOneHandle}>Add 1</button>
      <button onClick={subOneHandle}>Sub 1</button>
    </div>
  );
});

export default Mobx;
