/* @refresh reset */

import React, { useState } from "react";
import Foo from './components/FunctionFoo'
import Bar from './components/ClassBar'
const LazyBar = React.lazy(() => import("./components/ClassBar"));
const LazyFoo = React.lazy(() => import("./components/FunctionFoo"));

function App() {
  return (
    <>
    <h1>dynamic import</h1>
      <React.Suspense fallback={'loading bar'}>
        <LazyBar />
      </React.Suspense>
      <React.Suspense fallback={'loading foo'}>
        <LazyFoo />
      </React.Suspense>
      <h1>static import</h1>
      <Bar />
      <Foo />
    </>
  );
}
export default App;
