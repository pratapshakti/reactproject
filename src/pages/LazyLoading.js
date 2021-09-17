import React, { lazy, Suspense } from "react";
const ComplexCoad = lazy(() => import("./ComplexCoad"));
const SimpleCoad = lazy(() => import("./SimpleCoad"));
export default function LazyLoading() {
  return (
    <div>
      <h1>LazyLoading</h1>
      <Suspense fallback={<div>please wait..... simpleCoad is loading</div>}>
        <SimpleCoad />
      </Suspense>
      <Suspense fallback={<div>please wait..... ComplexCoad is loading</div>}>
        <ComplexCoad />
      </Suspense>
    </div>
  );
}
